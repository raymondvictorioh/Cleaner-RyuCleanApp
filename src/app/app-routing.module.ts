import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  { path: 'viewAllJobs', loadChildren: './view-all-jobs/view-all-jobs.module#ViewAllJobsPageModule', canActivate: [AuthGuard] },
  
  { path: 'login', loadChildren:'./login/login.module#LoginPageModule', canActivate: [AuthGuard] },
  
  { path: 'end-job', loadChildren: './end-job/end-job.module#EndJobPageModule', canActivate: [AuthGuard]},
  
  { path: 'view-profile', loadChildren: './view-profile/view-profile.module', canActivate:[AuthGuard] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
