import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-app-admin-add-movie-link',
  templateUrl: './app-admin-add-movie-link.component.html',
  styleUrls: ['./app-admin-add-movie-link.component.scss']
})
export class AppAdminAddMovieLinkComponent implements OnInit {
  action: Subject<boolean> = new Subject();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

  add() {
    this.action.next(true);
  }
}
