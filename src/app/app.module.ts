import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, MDBRootModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppBrowseComponent } from './app-browse/app-browse.component';
import { AppPaginationBarComponent } from './app-pagination-bar/app-pagination-bar.component';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { AppRandomComponent } from './app-random/app-random.component';
import { NgForm } from '@angular/forms';
import { AppMovieDetailsComponent } from './app-movie-details/app-movie-details.component';
import { AppAdminInterfaceComponent } from './admin/app-admin-interface/app-admin-interface.component';
import { AppHomeSectionComponent } from './app-home-section/app-home-section.component';
import { AppConfirmationModalComponent } from './app-confirmation-modal/app-confirmation-modal.component';
import { AppAdminLoginComponent } from './admin/app-admin-login/app-admin-login.component';
import { AppAdminProfileComponent } from './admin/app-admin-profile/app-admin-profile.component';
import { AppAdminMaintenanceComponent } from './admin/app-admin-maintenance/app-admin-maintenance.component';
import { AppAdminMoviesListComponent } from './admin/app-admin-movies-list/app-admin-movies-list.component';
import { AppAdminDashboardComponent } from './admin/app-admin-dashboard/app-admin-dashboard.component';
import { AppAdminAddEditMovieComponent } from './admin/app-admin-add-edit-movie/app-admin-add-edit-movie.component';
import { AppAdminAddMovieLinkComponent } from './admin/app-admin-add-movie-link/app-admin-add-movie-link.component';
import { AppDisplayInfoComponent } from './app-display-info/app-display-info.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppBrowseComponent,
    AppPaginationBarComponent,
    AppGalleryComponent,
    AppRandomComponent,
    AppMovieDetailsComponent,
    AppAdminInterfaceComponent,
    AppHomeSectionComponent,
    AppConfirmationModalComponent,
    AppAdminLoginComponent,
    AppAdminProfileComponent,
    AppAdminMaintenanceComponent,
    AppAdminMoviesListComponent,
    AppAdminDashboardComponent,
    AppAdminAddEditMovieComponent,
    AppAdminAddMovieLinkComponent,
    AppDisplayInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBRootModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
