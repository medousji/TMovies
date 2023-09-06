import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminAddEditMovieComponent } from './admin/app-admin-add-edit-movie/app-admin-add-edit-movie.component';
import { AppAdminDashboardComponent } from './admin/app-admin-dashboard/app-admin-dashboard.component';
import { AppAdminInterfaceComponent } from './admin/app-admin-interface/app-admin-interface.component';
import { AppAdminLoginComponent } from './admin/app-admin-login/app-admin-login.component';
import { AppAdminMaintenanceComponent } from './admin/app-admin-maintenance/app-admin-maintenance.component';
import { AppAdminMoviesListComponent } from './admin/app-admin-movies-list/app-admin-movies-list.component';
import { AppAdminProfileComponent } from './admin/app-admin-profile/app-admin-profile.component';
import { AppBrowseComponent } from './app-browse/app-browse.component';
import { AppHomeSectionComponent } from './app-home-section/app-home-section.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppMovieDetailsComponent } from './app-movie-details/app-movie-details.component';
import { AppRandomComponent } from './app-random/app-random.component';

const routes: Routes = [
  {path: '', component: AppHomeComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: AppHomeSectionComponent},
    {path: 'browse', component: AppBrowseComponent},
    {path: 'random', component: AppRandomComponent},
    {path: 'movie-details', component: AppMovieDetailsComponent}
  ]},

  {path: 'tmovies-admin-panel', component: AppAdminInterfaceComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: AppAdminDashboardComponent},
    {path: 'movies-list', component: AppAdminMoviesListComponent},
    {path: 'add-movie', component: AppAdminAddEditMovieComponent},
    {path: 'edit-movie', component: AppAdminAddEditMovieComponent},
    {path: 'maintenance', component: AppAdminMaintenanceComponent},
    {path: 'profile', component: AppAdminProfileComponent},
  ]},

  {path: 'tmovies-admin-login', component: AppAdminInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
