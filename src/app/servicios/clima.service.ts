import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClimaService {
  url: string;
  appid: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api.openweathermap.org/data/2.5/';
    this.appid = 'baa37d071fdcb14fd569c2d13e7f4da3';
  }

  getClima(lat: number, long: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'weather?lat=' + lat + '&lon=' + long + '&appid=' + this.appid);
  }

  getPronost(lat: number, long: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'forecast?lat=' + lat + '&lon=' + long + '&appid=' + this.appid);
  }
}
