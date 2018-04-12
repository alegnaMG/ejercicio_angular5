import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisesService } from '../servicios/paises.service';
import { ClimaService } from '../servicios/clima.service';

@Component({
  selector: 'app-info-clima',
  templateUrl: './info-clima.component.html',
  styleUrls: ['./info-clima.component.css']
})
export class InfoClimaComponent implements OnInit {
  pais: any;
  objeto: {};
  objetoP: {};

  constructor(private router: Router,
    private paisesSrv: PaisesService,
    private climaSrv: ClimaService) {
    this.pais = {};
    this.objeto = {};
    this.objetoP = {};
  }

  ngOnInit() {
    this.obtenerPais();
  }

  obtenerPais() {
    this.pais = this.paisesSrv.pais;
    this.paisesSrv.change.subscribe(pais => {
      this.pais = pais;
      this.obtenerClima(this.pais);
      this.obtenerPronost(this.pais);
    });
    if (this.pais !== undefined) {
      this.obtenerClima(this.pais);
      this.obtenerPronost(this.pais);
    }
  }

  infoMoneda() { this.router.navigate(['moneda']); }

  obtenerClima(pais) {
    this.climaSrv.getClima(pais.latlng[0], pais.latlng[1]).subscribe(result => {
      this.objeto = result;
    });
  }

  obtenerPronost(pais) {
    this.climaSrv.getPronost(pais.latlng[0], pais.latlng[1]).subscribe(result => {
      this.objetoP = result;
    });
  }
}
