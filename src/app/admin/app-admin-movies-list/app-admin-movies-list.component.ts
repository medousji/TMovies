import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AppConfirmationModalComponent } from 'src/app/app-confirmation-modal/app-confirmation-modal.component';
import { AppDisplayInfoComponent } from 'src/app/app-display-info/app-display-info.component';

@Component({
  selector: 'app-app-admin-movies-list',
  templateUrl: './app-admin-movies-list.component.html',
  styleUrls: ['./app-admin-movies-list.component.scss']
})
export class AppAdminMoviesListComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  openMultiDeleteMoviesModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to delete the selected movies?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }

  openDescriptionModal(): void {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        icon: 'book',
        title: 'Description',
        info: 'this is a description test for movie thanks for your hard work :D'
      }
    };

    this.modalRef = this.modalService.show(AppDisplayInfoComponent, options);
  }

  openDeleteSingleMovieModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to delete this movie?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }

}
