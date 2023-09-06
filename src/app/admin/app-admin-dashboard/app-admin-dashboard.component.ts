import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-admin-dashboard',
  templateUrl: './app-admin-dashboard.component.html',
  styleUrls: ['./app-admin-dashboard.component.scss']
})
export class AppAdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40], label: 'Movies Added' },
    { data: [28, 48, 40, 19, 86, 27, 29, 28, 48, 40, 19, 86, 27, 90], label: 'Movies Downloaded' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(238, 105, 63, .2)',
      borderColor: 'rgba(235, 70, 20, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(252, 253, 254, .2)',
      borderColor: 'rgba(236, 242, 249, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

}
