import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-app-display-info',
  templateUrl: './app-display-info.component.html',
  styleUrls: ['./app-display-info.component.scss']
})
export class AppDisplayInfoComponent implements OnInit {

  icon: string;
  title: string;
  info: string;

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
