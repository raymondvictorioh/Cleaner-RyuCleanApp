import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndJobPageRoutingModule } from './end-job-routing.module';

import { EndJobPage } from './end-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndJobPageRoutingModule
  ],
  declarations: [EndJobPage]
})
export class EndJobPageModule {}
