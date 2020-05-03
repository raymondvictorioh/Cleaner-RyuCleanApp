import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilityService } from '../utility.service';
import { MenuController } from '@ionic/angular';
import { Cleaner } from '../cleaner';
import { CleanerService } from '../cleaner.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted: boolean;
  username: string;
  password: string;
  loginError: boolean;
  errorMessage: String;
  cleanerId: number;

  constructor(private router: Router,
    public utilityService: UtilityService, private cleanerService: CleanerService,
    public menuCtrl: MenuController) {
    this.submitted = false;
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  clear() {
    this.username = "";
    this.password = "";
  }

  cleanerLogin(cleanerLoginForm: NgForm) {
    this.submitted = true;
    if (cleanerLoginForm.valid) {
      this.utilityService.setUsername(this.username);
      this.utilityService.setPassword(this.password);

      this.cleanerService.cleanerLogin(this.username, this.password).subscribe(
        response => {
          let cleaner: Cleaner = response.cleaner;
          if (cleaner != null) {
            this.utilityService.setIsLogin(true);
            this.utilityService.setCurrentCleaner(cleaner);
            console.log(this.utilityService.getCurrentCleaner().firstName);
            console.log(this.utilityService.getCurrentCleaner().cleanerId);

          } else {
            this.loginError = true;
          } this.router.navigateByUrl('/home');
        },
        error => {
          this.loginError = true;
          this.errorMessage = error
        }
      )
    }
    this.menuCtrl.enable(true);

  }
  cleanerLogout(): void {
    this.utilityService.setIsLogin(false);
    this.utilityService.setCurrentCleaner(null);
    this.menuCtrl.enable(false);
    console.log("is Log out : " + this.utilityService.getIsLogin())
  }

  back() {
    this.router.navigate(["home"]);
  }



}
