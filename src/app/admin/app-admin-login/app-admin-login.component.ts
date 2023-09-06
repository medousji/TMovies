import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-app-admin-login',
  templateUrl: './app-admin-login.component.html',
  styleUrls: ['./app-admin-login.component.scss']
})
export class AppAdminLoginComponent implements OnInit {

  constructor(public modalRef: MDBModalRef, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.modalRef.hide();
    localStorage.setItem("authorization", "admin");
    this.router.navigateByUrl("/tmovies-admin-panel");
  }

}
