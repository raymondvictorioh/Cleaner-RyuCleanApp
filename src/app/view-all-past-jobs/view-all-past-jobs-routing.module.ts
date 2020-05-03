import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPastJobsPage } from './view-all-past-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPastJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPastJobsPageRoutingModule {}
