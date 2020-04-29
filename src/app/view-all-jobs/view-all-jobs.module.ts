import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllJobsPageRoutingModule } from './view-all-jobs-routing.module';

import { ViewAllJobsPage } from './view-all-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllJobsPageRoutingModule
  ],
  declarations: [ViewAllJobsPage]
})
export class ViewAllJobsPageModule {}
