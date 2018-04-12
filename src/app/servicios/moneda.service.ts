import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MonedaService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://free.currencyconverterapi.com/api/v5/convert?q=';
  }

  getConvert(text: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + text + '&compact=y');
  }

}
