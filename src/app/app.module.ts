import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { ListFechasComponent } from './components/list-fechas/list-fechas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEquipoComponent,
    ListFechasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
