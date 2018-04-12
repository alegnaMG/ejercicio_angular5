import { NgModule } from '@angular/core';
// Modulo de las rutas
import { Routes, RouterModule } from '@angular/router';
// componente que se utiliza en la ruta
import { ContenedorAComponent } from './contenedor-a/contenedor-a.component';
import { ContenedorBComponent } from './contenedor-b/contenedor-b.component';
import { InfoDescripComponent } from './info-descrip/info-descrip.component';
import { InfoNoticiasComponent } from './info-noticias/info-noticias.component';
import { InfoMonedaComponent } from './info-moneda/info-moneda.component';
import { InfoClimaComponent } from './info-clima/info-clima.component';

const routes: Routes = [
  {
    path: '', component: InfoDescripComponent
  },
  {
    path: 'descripcion', component: InfoDescripComponent
  },
  {
    path: 'noticias', component: InfoNoticiasComponent
  },
  {
    path: 'moneda', component: InfoMonedaComponent
  },
  {
    path: 'clima', component: InfoClimaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
