import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-app-confirmation-modal',
  templateUrl: './app-confirmation-modal.component.html',
  styleUrls: ['./app-confirmation-modal.component.scss']
})
export class AppConfirmationModalComponent implements OnInit {

  description: string = "";

  action: Subject<boolean> = new Subject();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

  yes(): void {
    this.action.next(true)
  }

}
