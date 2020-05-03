import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'view-all-jobs', loadChildren: './view-all-jobs/view-all-jobs.module#ViewAllJobsPageModule', canActivate: [AuthGuard] },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [AuthGuard] },

  { path: 'end-job', loadChildren: './end-job/end-job.module#EndJobPageModule', canActivate: [AuthGuard] },

  { path: 'view-profile', loadChildren: './view-profile/view-profile.module#ViewProfilePageModule', canActivate: [AuthGuard] },
  {
    path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule', canActivate: [AuthGuard]

  },
  
  { path: 'jobs', loadChildren:'./jobs/jobs.module#JobsPageModule' },
  {
    path: 'view-all-past-jobs',
    loadChildren: () => import('./view-all-past-jobs/view-all-past-jobs.module').then(m => m.ViewAllPastJobsPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then(m => m.AnnouncementsPageModule)
  },
  {
    path: 'accountsettings',
    loadChildren: () => import('./accountsettings/accountsettings.module').then(m => m.AccountsettingsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
