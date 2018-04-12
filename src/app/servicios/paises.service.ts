import 'rxjs/add/operator/map';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaisesService {
  url: string;
  pais: {};
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.url = 'https://restcountries.eu/rest/v2/all';
  }

  seleccionarPais(pais) {
    this.pais = pais;
    this.change.emit(this.pais);
  }

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}
