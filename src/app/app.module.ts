import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './autos/vehiculos/vehiculos.component';


import { UtilitariosModule } from './utilitarios/UtilitariosModule';
import { CommonModule } from '@angular/common';
import { PaginaModule } from './autos/PaginaModule';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/user-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PaginaModule,
    HttpClientModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
