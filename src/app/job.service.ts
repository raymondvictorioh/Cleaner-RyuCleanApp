import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Job } from './job';
<<<<<<< HEAD

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

=======
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
>>>>>>> b325e3a928810ff8426bc195a458a868cf59a951
@Injectable({
  providedIn: 'root'
})
export class JobService {


  baseUrl: string;

  constructor(private httpClient: HttpClient,
    private utilityService: UtilityService) { 
      this.baseUrl = this.utilityService.getRootPath() + "Job";
    }



    getJobByJobId(jobId: number): Observable<any>{
      return this.httpClient.get<any>(this.baseUrl + "/retrieveJob/" + jobId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe(
        catchError(this.handleError)
      );
    }  

    updateJob(jobToUpdate: Job): Observable<any>
  {
    let updateJobReq = {
      "username": this.utilityService.getUsername(),
      "password": this.utilityService.getPassword(),
      "job": jobToUpdate
    };

    return this.httpClient.post<any>(this.baseUrl, updateJobReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);

  }

  getScheduledJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsByJobStatusEnumForCleaners?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
      + "&cleanerId=" + this.utilityService.getCurrentCleaner().cleanerId + "&jobStatus=ACCEPTED").pipe(
        catchError(this.handleError)
      );
  }

  getPastJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsByJobStatusEnumForCleaners?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
      + "&cleanerId=" + this.utilityService.getCurrentCleaner().cleanerId + "&jobStatus=COMPLETED").pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error.message;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }


}
