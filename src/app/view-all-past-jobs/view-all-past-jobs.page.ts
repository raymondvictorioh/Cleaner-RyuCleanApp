import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../job';
import { LoadingController, ModalController } from '@ionic/angular';
// import { ViewJobDetailsPage } from '../view-job-details/view-job-details.page';
import { DatePipe } from '@angular/common';
// import { DateSettingModalPage } from "../date-setting-modal/date-setting-modal.page";
@Component({
  selector: 'app-view-all-past-jobs',
  templateUrl: './view-all-past-jobs.page.html',
  styleUrls: ['./view-all-past-jobs.page.scss'],
})
export class ViewAllPastJobsPage implements OnInit {

  jobs: Job[];
  jobId: number;
  message: string;
  numberOfJobs: number;
  constructor(private router: Router, private jobService: JobService, public loadingController: LoadingController, public modalController: ModalController, public loadingCtrl: LoadingController) {
  }



  ngOnInit() {
    this.refreshJobs();
  }


  ionViewWillEnter() {
    this.refreshJobs();
    console.log("asdasd");
  }

  refreshJobs() {
    this.jobService.getPastJobs().subscribe(
      response => {
        this.jobs = response.jobs;
        console.log(this.jobs.length);
        this.numberOfJobs = this.jobs.length;
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
  }

  parseDate(d: Date) {
    return d.toString().replace('[UTC]', '');
  }
}