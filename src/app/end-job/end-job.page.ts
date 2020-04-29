import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-end-job',
  templateUrl: './end-job.page.html',
  styleUrls: ['./end-job.page.scss'],
})
export class EndJobPage implements OnInit {

  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) { }

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
  }
}
