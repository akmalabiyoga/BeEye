import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  date1!: Date;
  title = 'BeEye';
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Realisasi',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .1
        },
        {
          label: 'Proyeksi',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: true,
          borderColor: '#d0ddf5',
          tension: .1,
          backgroundColor: '#d0ddf5'
        }
      ]
    }
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#464255'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#464255'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#464255'
          },
          grid: {
            color: '#d3d5d7'
          }
        }
      }
    };
  }

}
