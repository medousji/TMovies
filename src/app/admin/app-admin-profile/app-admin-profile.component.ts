import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AppConfirmationModalComponent } from 'src/app/app-confirmation-modal/app-confirmation-modal.component';

@Component({
  selector: 'app-app-admin-profile',
  templateUrl: './app-admin-profile.component.html',
  styleUrls: ['./app-admin-profile.component.scss']
})
export class AppAdminProfileComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  openEditConfirmationModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to edit your profile?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }
}
