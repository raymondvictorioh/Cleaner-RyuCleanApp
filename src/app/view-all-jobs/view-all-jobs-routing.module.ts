import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllJobsPage } from './view-all-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllJobsPageRoutingModule {}
