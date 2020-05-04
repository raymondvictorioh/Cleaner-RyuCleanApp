import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Job } from '../job';
import { JobService } from '../job.service';
import { JobStatusEnum } from '../job-status-enum.enum';
import { UtilityService } from '../utility.service';
import { Cleaner } from '../cleaner';
import { CleanerService } from '../cleaner.service';
//import { timingSafeEqual } from 'crypto';

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
  currentCleaner: Cleaner;
  cleaner: Cleaner;

  constructor(private barcodeScanner: BarcodeScanner,
    private jobService: JobService,
    private utilityService: UtilityService,
    private cleanerService: CleanerService) { }

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
    let componentsOfJob = this.scannedCode.split(",");
    this.jobToEnd.jobRating = componentsOfJob[1];
    this.jobToEnd.jobFeedback = componentsOfJob[2];

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
    this.currentCleaner = this.utilityService.getCurrentCleaner();
   
    //console.log(this.currentCleaner.totalNumCleaningServicesProvided);
    
    //console.log(((this.currentCleaner.accumulatedRating*this.currentCleaner.totalNumCleaningServicesProvided) + this.jobToEnd.jobRating)/(this.currentCleaner.totalNumCleaningServicesProvided +1));
    this.currentCleaner.accumulatedRating = this.jobToEnd.jobRating + this.currentCleaner.accumulatedRating;
    this.currentCleaner.totalNumCleaningServicesProvided++;
    this.cleaner = this.currentCleaner
    this.cleanerService.updateCleaner(this.cleaner).subscribe(
      response => {
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "Your profile is updated successfully";
        let editedCleaner: Cleaner = response.cleaner;
        this.utilityService.setCurrentCleaner(editedCleaner);

      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while updating the product: " + error;

        console.log('********** UpdateProductComponent.ts: ' + error);
      }
    )

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
