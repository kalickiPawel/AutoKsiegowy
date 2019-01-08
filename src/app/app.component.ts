import { Component } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoKsiegowy';
  wydatki: Wydatek[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.wydatki = [
      new Wydatek('Tankowanie', 252.43, '', new Date(2018, 4, 30), 523, 47.5),
      new Wydatek('Myjnia', 75, '', new Date(2018, 4, 2)),
      new Wydatek('Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
      new Wydatek('Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
      new Wydatek('Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 530, 41)
    ];
  }
}
