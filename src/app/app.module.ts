import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TypeaheadModule, CarouselModule } from 'ngx-bootstrap';
// HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// Configuracion de la ruta principal
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { ContenedorAComponent } from './contenedor-a/contenedor-a.component';
import { ContenedorBComponent } from './contenedor-b/contenedor-b.component';
import { InfoDescripComponent } from './info-descrip/info-descrip.component';
import { InfoNoticiasComponent } from './info-noticias/info-noticias.component';
import { InfoMonedaComponent } from './info-moneda/info-moneda.component';
import { InfoClimaComponent } from './info-clima/info-clima.component';
// Servicios
import { PaisesService } from './servicios/paises.service';
import { NoticiasService } from './servicios/noticias.service';
import { ClimaService } from './servicios/clima.service';
import { MonedaService } from './servicios/moneda.service';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorAComponent,
    ContenedorBComponent,
    InfoDescripComponent,
    InfoNoticiasComponent,
    InfoMonedaComponent,
    InfoClimaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    CarouselModule.forRoot()
  ],
  exports: [
    TypeaheadModule, CarouselModule

  ],
  providers: [
    PaisesService,
    NoticiasService,
    ClimaService,
    MonedaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
