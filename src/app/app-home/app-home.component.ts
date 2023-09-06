import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  isSearching: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  search(text: string) {
    if (text == '') {
      this.isSearching = false;
    } else {
      this.isSearching = true;
    }
  }

}
