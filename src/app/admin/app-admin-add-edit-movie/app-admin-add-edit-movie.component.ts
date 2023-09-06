import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AppConfirmationModalComponent } from 'src/app/app-confirmation-modal/app-confirmation-modal.component';
import { AppAdminAddMovieLinkComponent } from '../app-admin-add-movie-link/app-admin-add-movie-link.component';

@Component({
  selector: 'app-app-admin-add-edit-movie',
  templateUrl: './app-admin-add-edit-movie.component.html',
  styleUrls: ['./app-admin-add-edit-movie.component.scss']
})
export class AppAdminAddEditMovieComponent implements OnInit {
  modalRef: MDBModalRef;
  
  op: string;

  operation: any =  {
    title: "",
    titleIcon: "",
    buttonIcon: "",
  }

  constructor(private modalService: MDBModalService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url == "/tmovies-admin-panel/add-movie") {
      this.op = "add";
      this.operation.title = "Add";
      this.operation.titleIcon = "plus";
      this.operation.buttonIcon = "plus"
    } else if (this.router.url == "/tmovies-admin-panel/edit-movie") {
      this.op = "edit";
      this.operation.title = "Edit";
      this.operation.titleIcon = "edit";
      this.operation.buttonIcon = "save"
    }
  }

  openAddLinkModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true
    };

    this.modalRef = this.modalService.show(AppAdminAddMovieLinkComponent, options);
    this.modalRef.content.action.subscribe(() => {
    });
  }

  openDeleteLinkModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data : {
        description: 'Are you sure you want to delete this link?'
      }
    };
    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }

  openAddEditMovieModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data : {
        description: 'Are you sure you want to ' +  this.op + ' this movie?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }

}
