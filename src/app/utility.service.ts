import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Cleaner } from './cleaner';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private platform: Platform) { }

  getRootPath(): string {
    console.log('this.platform.is("hybrid"): ' + this.platform.is('hybrid'));

    if (this.platform.is('hybrid')) {
      return "http://192.168.137.1:8080/RyuCleanRws/webresources/";
    }
    else {
      return "/api/";
    }
  }

  getIsLogin(): boolean {
    if (sessionStorage.isLogin == "true") {
      return true;
    }
    else {
      return false;
    }
  }

  setIsLogin(isLogin: boolean): void {
    sessionStorage.isLogin = isLogin;
  }

  getCurrentCleaner(): Cleaner {
    return JSON.parse(sessionStorage.currentCleaner);
  }

  setCurrentCleaner(currentCleaner: Cleaner): void {
    sessionStorage.currentCleaner = JSON.stringify(currentCleaner);
  }

  getUsername(): string {
    return sessionStorage.username;
  }

  setUsername(username: string): void {
    sessionStorage.username = username;
  }


  getPassword(): string {
    return sessionStorage.password;
  }

  setPassword(password: string): void {
    sessionStorage.password = password;
  }

  setCurrentCleanerId(cleanerId: number): void {
    sessionStorage.cusId = cleanerId;
  }

  getCurrentCleanerId(): number {
    return sessionStorage.cleanerId;
  }



}
