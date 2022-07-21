import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from '@angular/compiler';
import { Observable, ObservedValuesFromArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userArray: Realisasi[] = [];
  private url: string="../../assets/datadummy.csv"
  constructor(private http: HttpClient){ }
  getData():Observable<Realisasi[]> {
    return this.http.get<Realisasi[]>(this.url)
  }
  public dataDumdum = [
    {bulan: "Jan", proyeksi: 23, realisasi: 24},
    {bulan: "Feb", proyeksi: 22, realisasi: 21},
    {bulan: "Mar", proyeksi: 24, realisasi: 23},
    {bulan: "Apr", proyeksi: 23, realisasi: 22},
    {bulan: "Mei", proyeksi: 21, realisasi: 20},
    {bulan: "Jun", proyeksi: 27, realisasi: 23},
    {bulan: "Jul", proyeksi: 28, realisasi: 26},
    {bulan: "Aug", proyeksi: 29, realisasi: 28},
    {bulan: "Sep", proyeksi: 30, realisasi: 32},
    {bulan: "Okt", proyeksi: 21, realisasi: 24},
    {bulan: "Nov", proyeksi: 19, realisasi: 24},
    {bulan: "Des", proyeksi: 30, realisasi: 32},
  ]
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