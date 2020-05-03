import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { MenuController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Cleaner } from '../cleaner';
import { CleanerService } from '../cleaner.service';
import { JobService } from '../job.service';
import { Job } from '../job';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private completedJobs: Job[];
  private scheduledJobs: Job[];

  numScheduledJobs: number;
  numCompletedJobs: number;
  private cleaner: Cleaner;
  private cleanerId: number;
  private avgRating: number;

  constructor(private jobService: JobService, private router: Router, private cleanerService: CleanerService, public utilityService: UtilityService, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }


  ngOnInit() {
    console.log('********** HomePage.ngOnInit()');
    this.cleanerId = this.utilityService.getCurrentCleaner().cleanerId;
    this.refreshCleaner();
    this.refreshCompletedJobs();
    this.refreshScheduledJobs();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    console.log("current user is : " + this.utilityService.getCurrentCleaner());
    this.refreshCleaner();
    this.refreshCompletedJobs();
    this.refreshScheduledJobs();
  }


  cleanerLogout(): void {
    this.utilityService.setIsLogin(false);
    this.utilityService.setCurrentCleaner(null);
    this.menuCtrl.enable(false, 'custom');
    console.log("is Logged In : " + this.utilityService.getIsLogin())
    this.router.navigate(["/login"]);
  }

  refreshCleaner() {
    console.log("REFRESH CLEANER");

    this.cleanerService.retrieveCleanerByCleanerId(this.cleanerId).subscribe(
      response => {
        this.cleaner = response.cleaner;
        console.log(this.cleaner);
        console.log(this.cleaner.totalNumCleaningServicesProvided);
        console.log(this.cleaner.accumulatedRating);
        this.avgRating = this.cleaner.accumulatedRating / this.cleaner.totalNumCleaningServicesProvided;
        console.log(this.avgRating);
      }

    )
  }

  refreshCompletedJobs() {
    this.jobService.getPastJobs().subscribe(
      response => {
        this.completedJobs = response.jobs;
        this.numCompletedJobs = this.completedJobs.length;

        console.log(this.completedJobs);
        console.log("COMPLETED JOBS : " + this.completedJobs.length);
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
  }

  refreshScheduledJobs() {

    this.jobService.getScheduledJobs().subscribe(
      response => {
        this.scheduledJobs = response.jobs;
        this.numScheduledJobs = this.scheduledJobs.length;
        console.log(this.scheduledJobs);
        console.log("SCHEDULED JOBS : " + this.scheduledJobs.length);
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
  }



}
