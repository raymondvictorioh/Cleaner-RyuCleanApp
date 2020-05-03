import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsPage } from './jobs.page';

const routes: Routes = [
  {
    path: '',
    component: JobsPage,
    children:
      [
        {
          path: '',
          redirectTo: '/jobs/view-all-jobs',
          pathMatch: 'full'
        },
        {
          path: 'view-all-jobs',
          children: [
            {
              path: '',
              loadChildren: './view-all-jobs/view-all-jobs.module#ViewAllJobsPageModule'
            }
          ]
        },
        {
          path: 'viewAllPastJobs',
          children: [
            {
              path: '',
              loadChildren: './view-all-past-jobs/view-all-past-jobs.module#ViewAllPastJobsPageModule'
            }
          ]
        }
      ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule { }
