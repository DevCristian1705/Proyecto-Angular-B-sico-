import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.component';

import { AppComponent } from './app.component';
import { ListarPaisesComponent } from './listar-paises/paises/listar-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPaisesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
