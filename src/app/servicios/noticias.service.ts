import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoticiasService {
  url: string;
  appid: string;

  constructor(private http: HttpClient) {
    this.url = 'https://newsapi.org/v2/top-headlines?country=';
    this.appid = '58b549f2ffa246739ef38628f0a5b8c9';
  }

  getNoticias(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + nombre + '&category=business&apiKey=' + this.appid);
  }

}
