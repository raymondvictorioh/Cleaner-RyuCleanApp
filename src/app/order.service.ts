import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { OrderEntity } from './order-entity';
import { Job } from './job';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OrderEntityService {

  baseUrl: string;



  constructor(private httpClient: HttpClient,
    private utilityService: UtilityService) {
    this.baseUrl = this.utilityService.getRootPath() + "Order";
  }


  // getCurrentOrderEntity(): OrderEntity {
  //   return this.utilityService.getCurrentOrder();
  // }

  // setCurrentOrderEntity(orderEntityToBeSet: OrderEntity): void {
  //   this.utilityService.setCurrentOrderEntity(orderEntityToBeSet);
  // }

  createNewOrder(username: string, password: string, planId: number, customerId: number, jobs: Job[], newOrder: OrderEntity): Observable<any> {
    let createNewOrderReq = { "username": username, "password": password, "planId": planId, "customerId": customerId, "jobs": jobs, "newOrder": newOrder }
    return this.httpClient.put<any>(this.baseUrl, createNewOrderReq, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getOrderByOrderId(orderId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveOrder/" + orderId + "?username=" + "username" + "&password=" + "password").pipe
      (
        catchError(this.handleError)
      );
  }

  // getPlanByPlanId(planId: number): Observable<any> {
  // 	return this.httpClient.get<any>(this.baseUrl + "/retrievePlan/" + planId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe
  // 		(
  // 			catchError(this.handleError)
  // 		);
  // }

  // http://localhost:8080/RyuCleanRws/webresources/Order/retrieveOrder/1?username=username&password=password

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occured : " + error.error.message;
    } else {
      errorMessage = "A HTTP error has occured : " + `HTTP ${error.status}: ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
