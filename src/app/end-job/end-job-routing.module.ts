import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndJobPage } from './end-job.page';

const routes: Routes = [
  {
    path: '',
    component: EndJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndJobPageRoutingModule {}
