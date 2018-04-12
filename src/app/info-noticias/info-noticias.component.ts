import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisesService } from '../servicios/paises.service';
import { NoticiasService } from '../servicios/noticias.service';

@Component({
  selector: 'app-info-noticias',
  templateUrl: './info-noticias.component.html',
  styleUrls: ['./info-noticias.component.css']
})
export class InfoNoticiasComponent implements OnInit {
  pais: any;
  alerta: string;
  objeto: {};

  constructor(private router: Router,
    private paisesSrv: PaisesService,
    private notiSrv: NoticiasService) {
    this.pais = {};
    this.objeto = {};
    this.alerta = 'NO HAY NOTICIAS.';
  }

  ngOnInit() {
    this.obtenerPais();
  }

  obtenerPais() {
    this.pais = this.paisesSrv.pais;
    this.paisesSrv.change.subscribe(pais => {
      this.pais = pais;
      this.objeto = {};
      this.obtenerNoticias(this.pais);
    });
    if (this.pais !== undefined) {
      this.obtenerNoticias(this.pais);
    }
  }

  infoMoneda() { this.router.navigate(['moneda']); }

  infoDescrip() { this.router.navigate(['descripcion']); }

  obtenerNoticias(pais) {
    this.notiSrv.getNoticias(pais.alpha2Code).subscribe(result => {
      this.objeto = result;
    });
  }

}
