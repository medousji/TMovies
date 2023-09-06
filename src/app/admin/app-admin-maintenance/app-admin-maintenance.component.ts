import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AppConfirmationModalComponent } from 'src/app/app-confirmation-modal/app-confirmation-modal.component';

@Component({
  selector: 'app-app-admin-maintenance',
  templateUrl: './app-admin-maintenance.component.html',
  styleUrls: ['./app-admin-maintenance.component.scss']
})
export class AppAdminMaintenanceComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  openBackupConfirmationModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to create a backup?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }


  openRestoreConfirmationModal(): void {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to restore this backup?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }

  openDeleteBackupConfirmationModal(): void {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to delete this backup?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);
  }

}
