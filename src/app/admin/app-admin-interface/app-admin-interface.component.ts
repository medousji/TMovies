import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AppConfirmationModalComponent } from 'src/app/app-confirmation-modal/app-confirmation-modal.component';
import { AppAdminLoginComponent } from '../app-admin-login/app-admin-login.component';

@Component({
  selector: 'app-app-admin-interface',
  templateUrl: './app-admin-interface.component.html',
  styleUrls: ['./app-admin-interface.component.scss']
})
export class AppAdminInterfaceComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService, private router: Router) { }

  ngOnInit(): void {
    
    if (!this.isLoged()) {
      if (this.router.url == "/tmovies-admin-login") {
        this.openLoginModal();
      } else {
        this.router.navigateByUrl("tmovies-admin-login");
      }
    }
  }

  openLogoutModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      data: {
        description: 'Are you sure you want to logout?'
      }
    };

    this.modalRef = this.modalService.show(AppConfirmationModalComponent, options);

    this.modalRef.content.action.subscribe((result: boolean) => {
      if (result) {
        this.modalRef.hide();
        localStorage.removeItem("authorization");
        this.router.navigateByUrl("tmovies-admin-login");
      }
    })
  }

  isLoged(): boolean {
    let authorization = localStorage.getItem("authorization");
    if (authorization !== null) {
      return true;
    }
    return false;
  }

  private openLoginModal() {
    let options = {
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true
    };

    this.modalRef = this.modalService.show(AppAdminLoginComponent, options);
  }
}
