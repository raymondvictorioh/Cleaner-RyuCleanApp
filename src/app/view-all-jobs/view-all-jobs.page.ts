import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../job';
import { LoadingController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { OrderEntity } from '../order-entity';
import { OrderEntityService } from '../order.service';

// import { ViewJobDetailsPage } from '../view-job-details/view-job-details.page';
import { DatePipe } from '@angular/common';
import { fromEventPattern } from 'rxjs';
// import { DateSettingModalPage } from "../date-setting-modal/date-setting-modal.page";

@Component({
  selector: 'app-view-all-jobs',
  templateUrl: './view-all-jobs.page.html',
  styleUrls: ['./view-all-jobs.page.scss'],
})
export class ViewAllJobsPage implements OnInit {
  jobs: Job[];
  jobId: number;
  message: string;
  numberOfJobs: number;
  currentOrder: OrderEntity;
  currentOrderId: number;
  constructor(private router: Router, private jobService: JobService, public loadingController: LoadingController, public modalController: ModalController,
    public loadingCtrl: LoadingController,
    private alertController: AlertController,
    private orderEntityService: OrderEntityService) {
  }



  ngOnInit() {
    this.refreshJobs();
  }


  ionViewWillEnter() {
    this.refreshJobs();
    console.log("asdasd");
  }

  refreshJobs() {
    this.jobService.getScheduledJobs().subscribe(
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

  async presentAlert(job) {
    console.log(job.orderId);
    this.currentOrderId = 2;
    this.orderEntityService.getOrderByOrderId(this.currentOrderId).subscribe(
      response => {
        this.currentOrder = response.orderEntity;
        console.log(this.currentOrder);
        console.log(this.currentOrder.notes);
        console.log(this.currentOrder.zipcode);

      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
    console.log(this.currentOrder == null);
    //let customerName:string = 
    //let customerAddress: string = job.order.zipcode;
    //console.log(customerName);
    const alert = await this.alertController.create({
      header: 'Job Details',
      subHeader: 'Comments',
      message: 'Please leave a rating',

    });

    await alert.present();

  }
}
