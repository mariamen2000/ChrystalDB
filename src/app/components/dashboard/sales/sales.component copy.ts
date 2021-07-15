import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  //sales = []

  constructor(private _dbService: DashboardService) { }

  //barchart
  public barChartData: any[] = [
    { data: [65, 59, 89, 80, 81, 56, 54, 60], label: 'Q3 Sales' },
    { data: [25, 39, 60, 91, 36, 54, 50, 90], label: 'Q4 Sales' }
  ];
  public barChartLabels: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    resposive: true,
    maintainAspectRatio: false,
  };

  //pieChart
  public pieChartData: any[] = [350, 450, 120];
  public pieChartLabels: string[] = ['XYZ Logistic', 'Main St', 'Final company']
  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public pieChartType: ChartType = 'doughnut';

  //gauge Chart
  public gaugeChartData: any[] = [40, 160];
  public gaugecolors: any[] = [
    {
      backgroundColor: ['#26547c', '#f5f5f5'],
      borderColor: '#111'
    }
  ];
  public gaugeChartOptions: ChartOptions = {
    circumference: Math.PI,
    rotation: Math.PI,
    cutoutPercentage: 80,
    responsive: true,
    maintainAspectRatio: false,
  };
  public gaugeChartType: ChartType = 'doughnut';


  //linechart
  lineChartData: any[] = [
    { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis' },
    { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
    { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting' },
  ];
  lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartColors = [
    {
      backgroundColor: 'rgba(6, 214, 160, 0.2)',
      borderColor: 'rgba(0, 200, 140, 0.5)',
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#555',
      pointHoverBorderColor: '#555'
    },
    {
      backgroundColor: 'rgba(255, 209, 102, 0.2)',
      borderColor: 'rgba(240, 180, 89, 0.5)',
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#555',
      pointHoverBorderColor: '#555'
    },
    {
      backgroundColor: 'rgba(15, 78, 133, 0.2)',
      borderColor: 'rgba(3, 64, 128, 0.5)',
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#555',
      pointHoverBorderColor: '#555'
    },
  ];

  ngOnInit(): void {
    /*this._dbService.getSales()
      .subscribe(
        res => this.sales = res,
        err => console.log(err)
      )*/
  }

}
