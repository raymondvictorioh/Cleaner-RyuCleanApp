import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Job } from '../job';
import { JobService } from '../job.service';
import { JobStatusEnum } from '../job-status-enum.enum';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-end-job',
  templateUrl: './end-job.page.html',
  styleUrls: ['./end-job.page.scss'],
})
export class EndJobPage implements OnInit {

  qrData = null;
  createdCode = null;
  scannedCode = null;
  jobToEnd: Job;
  jobId: number;
  resultSuccess : boolean;
  resultError : boolean;
  message: string;

  constructor(private barcodeScanner: BarcodeScanner,
    private jobService: JobService,
    private utilityService: UtilityService) { }

  ngOnInit() {

  }

  createCode(){
    this.createdCode = this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })

  }

  endJob(jobId){
    //getJob = RWSgetJobById(jobId);
    //getJob.endJob()
    //getJob.rating()
    //this.jobId = scannedcode.split(" ").[0];
    
    this.jobService.getJobByJobId(this.jobId).subscribe(
      response => {
        this.jobToEnd = response.job;
      },
      error => {
        console.log('***************** DateSettingModalPage' + error);
      }
    )

    this.jobToEnd.jobStatusEnum = JobStatusEnum.COMPLETED;
    //this.jobToEnd.jobRating = scannedcode.split(" ").[1];
    //this.jobToEnd.jobFeedback = scannedcode.split(" ").[2];

    this.jobService.updateJob(this.jobToEnd).subscribe(
      response => {
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "Job successfully ended";
        console.log("Job successfully ended");
      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while ending the job: " + error;
        
        console.log('********** UpdateProductComponent.ts: ' + error);
      }

    );
  }

  endJobTemp(event){
    this.utilityService.setUsername("username");
    this.utilityService.setPassword("password");
    
    this.jobService.getJobByJobId(2).subscribe(
      response => {
        this.jobToEnd = response.job;
      }, error => {
        //this.retrievePlanError = true;
        console.log("******* Frequency (View Plan)" + error);
      }
    )
    console.log(this.jobToEnd == null);
    this.jobToEnd.jobStatusEnum = JobStatusEnum.COMPLETED;
    this.jobToEnd.jobRating = 5
    this.jobToEnd.jobFeedback = "great stuff";

    this.jobService.updateJob(this.jobToEnd).subscribe(
      response => {
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "Job successfully ended";
        console.log("Job successfully ended");
      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while ending the job: " + error;
        
        console.log('********** UpdateProductComponent.ts: ' + error);
      }

    );

  }
}
