import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-movie-details',
  templateUrl: './app-movie-details.component.html',
  styleUrls: ['./app-movie-details.component.scss']
})
export class AppMovieDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
