import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, HeroComponent, ListComponent], // componentes
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [], // servicios
  bootstrap: [AppComponent], // pagina de inicio
})
export class AppModule {}
