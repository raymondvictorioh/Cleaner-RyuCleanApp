import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cleaner } from '../cleaner';
import { CleanerService } from '../cleaner.service';
import { UtilityService } from '../utility.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountsettingsPage implements OnInit {

  cleanerId: number;
  cleaner: Cleaner;
  retrieveCleanerError: boolean;
  error: boolean;
  errorMessage: string;

  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;



  constructor(private router: Router, private cleanerService: CleanerService, public utilityService: UtilityService) {
    this.retrieveCleanerError = false;
    this.error = false;
  }


  ngOnInit() {
    this.cleanerId = this.utilityService.getCurrentCleaner().cleanerId;
    this.cleaner = this.utilityService.getCurrentCleaner();
  }



  update(updateCleanerForm: NgForm) {
    if (updateCleanerForm.valid) {
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
    }
  }


}
