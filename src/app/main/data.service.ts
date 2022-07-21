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