import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-gallery',
  templateUrl: './app-gallery.component.html',
  styleUrls: ['./app-gallery.component.scss']
})
export class AppGalleryComponent implements OnInit {

  movies = [{
    title: '7 Pounds',
    releaseDate: '2007',
    poster: '7 pounds.jpeg'
  }, {
    title: 'Source Code',
    releaseDate: '2013',
    poster: 'Source Code.jpg'
  }, {
    title: 'Platform',
    releaseDate: '2019',
    poster: 'Platform.jpg'
  }, {
    title: 'X-Men The Days Of Future Past',
    releaseDate: '2014',
    poster: 'x-men days of the future past.jpeg'
  }, {
    title: 'Nightcrawler',
    releaseDate: '2014',
    poster: 'Nightcrawler.jpg'
  }, {
    title: 'Spiderman',
    releaseDate: '2000',
    poster: 'Spiderman.jpg'
  }, {
    title: 'I Am Legend',
    releaseDate: '2008',
    poster: 'ImLegend.jpeg'
  }, {
    title: 'Mission Imposible Ghost Protocol',
    releaseDate: '2015',
    poster: 'Mission imposible ghost protocol.jpg'
  },  {
    title: 'Looper',
    releaseDate: '2017',
    poster: 'Looper.jpg'
  },  {
    title: 'Saw',
    releaseDate: '2004',
    poster: 'Saw.jpg'
  },  {
    title: 'Fight Club',
    releaseDate: '1997',
    poster: 'Fight Club.jpg'
  },  {
    title: 'The Game',
    releaseDate: '1997',
    poster: 'The Game.jpg'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
