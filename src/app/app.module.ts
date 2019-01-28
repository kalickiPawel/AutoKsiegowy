import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaWydatkowComponent } from './lista-wydatkow/lista-wydatkow.component';
import { WydatkiService } from './wydatki.service';
import { DodajWydatekComponent } from './dodaj-wydatek/dodaj-wydatek.component';
import { StatystykiWydatkowComponent } from './statystyki-wydatkow/statystyki-wydatkow.component';
import { EdytujKategorieComponent } from './edytuj-kategorie/edytuj-kategorie.component';

const appRoutes: Routes = [
  { path: 'wydatki', component: ListaWydatkowComponent },
  { path: 'dodaj', component: DodajWydatekComponent },
  { path: 'statystyki', component: StatystykiWydatkowComponent },
  { path: 'kategorieEdit', component: EdytujKategorieComponent },
  { path: '',
    redirectTo: '/wydatki',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ListaWydatkowComponent, DodajWydatekComponent, StatystykiWydatkowComponent, EdytujKategorieComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WydatkiService ]
})
export class AppModule { }
