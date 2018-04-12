import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import L = require('leaflet');
import { TypeaheadMatch } from 'ngx-bootstrap';
import { LatLng } from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenedor-a',
  templateUrl: './contenedor-a.component.html',
  styleUrls: ['./contenedor-a.component.css']
})
export class ContenedorAComponent implements OnInit {
  lista: any[];
  options: any;
  layersControl: any;
  selected: string;
  center: LatLng;
  zoom: number;
  layers: L.Layer[];
  alerta: string;
  selectedOption: any;
  noResult: boolean;

  constructor(private paisesSrv: PaisesService, private router: Router) {
    this.lista = [];
    this.alerta = 'NO SE ENCONTRARON COINCIDENCIAS';
  }

  ngOnInit() {
    this.getPaises();
    this.center = L.latLng(0, 0);
    this.zoom = 2;
    this.layers = [];
    this.layers.push(L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5, minZoom: 2, attribution: '...' }));
  }

  actualizarMapa(a, b) {
    this.center = L.latLng(a, b);
    this.zoom = 4;
  }

  getPaises() {
    this.paisesSrv.getPaises().subscribe(result => {
      this.lista = result;
    });
  }

  typeaheadOnSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    this.actualizarMapa(this.selectedOption.latlng[0], this.selectedOption.latlng[1]);
    this.paisesSrv.seleccionarPais(this.selectedOption);
  }

  NoResults(event: boolean): void {
    this.noResult = event;
  }

}
