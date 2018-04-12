import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-info-descrip',
  templateUrl: './info-descrip.component.html',
  styleUrls: ['./info-descrip.component.css']
})
export class InfoDescripComponent implements OnInit {
  pais: {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private paisesSrv: PaisesService) {
    this.pais = {};
  }

  ngOnInit() {
    this.pais = this.paisesSrv.pais;
    this.obtenerPais();
  }

  infoNoticias() { this.router.navigate(['noticias']); }

  obtenerPais() {
    this.paisesSrv.change.subscribe(pais => {
      this.pais = pais;
    });
  }

}
