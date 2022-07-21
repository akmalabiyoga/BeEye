import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  basicData: any;
  basicOptions: any;
  date1!: Date;
  label2!: any;
  title = 'BeEye';

  sub1!: Subscription;

  dataR!: Array<number>;
  dataP!: Array<number>;
  public dataArray: Realisasi[] = [];
  public labelArray: Array<string> = [];
  public proyeksiArray: Array<number> = [];
  public realisasiArray: Array<number> = [];
  
  constructor(private primengConfig: PrimeNGConfig, private http: HttpClient) { }
  ngOnDestroy(): void {
    this.sub1.unsubscribe()
  }

  ngOnInit(): void {
    this.sub1 = this.http.get('../../../assets/datadummy.csv', {responseType: 'text'}).subscribe({
      next: (data) => {
        let csvtoRow = data.split("\n");
        for (let i = 1; i < csvtoRow.length - 1; i++){
          let row = csvtoRow[i].split(",");
          this.dataArray.push(new Realisasi(
            row[0],
            parseInt(row[1]),
            parseInt(row[2])
          ))
        }
      },
      error: (e) => console.log(e),
      complete: () => {
        this.dataArray.forEach(x => {
          this.labelArray.push(x.bulan)
          this.proyeksiArray.push(x.proyeksi)
          this.realisasiArray.push(x.realisasi)
        })
        this.basicData = {
          labels: this.labelArray,
          datasets: [
            {
              label: 'Realisasi',
              data: this.realisasiArray,
              fill: false,
              borderColor: '#42A5F5',
              tension: .1
            },
            {
              label: 'Proyeksi',
              data: this.proyeksiArray,
              fill: true,
              borderColor: '#d0ddf5',
              tension: .1,
              backgroundColor: '#d0ddf5'
            }
          ]
        }
      }
    })
    this.primengConfig.ripple = true;
    
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

export class Realisasi{
  bulan: string;
  proyeksi: number;
  realisasi: number;

  constructor(bulan: string, proyeksi: number, realisasi: number){
    this.bulan = bulan;
    this.proyeksi = proyeksi;
    this.realisasi = realisasi;
  }
}
