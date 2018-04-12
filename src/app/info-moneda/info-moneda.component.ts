import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisesService } from '../servicios/paises.service';
import { MonedaService } from '../servicios/moneda.service';

@Component({
  selector: 'app-info-moneda',
  templateUrl: './info-moneda.component.html',
  styleUrls: ['./info-moneda.component.css']
})
export class InfoMonedaComponent implements OnInit {
  pais: {};
  objeto: {};
  lista: any[];

  constructor(private router: Router,
    private paisesSrv: PaisesService,
    private monedaSrv: MonedaService) {
    this.pais = {};
    this.lista = [];
    this.objeto = {};
  }

  ngOnInit() {
    this.obtenerPais();
  }

  obtenerPais() {
    this.pais = this.paisesSrv.pais;
    this.paisesSrv.change.subscribe(pais => {
      this.pais = pais;
      this.obtenerConvertidor(this.pais);
    });
    if (this.pais !== undefined) {
      this.obtenerConvertidor(this.pais);
    }
  }

  infoNoticias() { this.router.navigate(['noticias']); }

  infoClima() { this.router.navigate(['clima']); }

  obtenerConvertidor(pais) {
    pais.currencies.forEach(element => {
      const text = element.code + '_USD';
      this.monedaSrv.getConvert(text).subscribe(objeto => {
        element.val = objeto[text].val;
      });
    });
    this.pais = pais;
  }

}
