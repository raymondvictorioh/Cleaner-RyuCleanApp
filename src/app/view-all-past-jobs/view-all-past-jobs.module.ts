import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPastJobsPageRoutingModule } from './view-all-past-jobs-routing.module';

import { ViewAllPastJobsPage } from './view-all-past-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPastJobsPageRoutingModule
  ],
  declarations: [ViewAllPastJobsPage]
})
export class ViewAllPastJobsPageModule {}
