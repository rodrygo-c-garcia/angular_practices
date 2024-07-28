import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/components/counter.module';

@NgModule({
  declarations: [AppComponent, HeroComponent, ListComponent], // componentes
  imports: [BrowserModule, AppRoutingModule, FormsModule, CounterModule], // modulos
  providers: [], // servicios
  bootstrap: [AppComponent], // pagina de inicio
})
export class AppModule {}
