import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Injectable()
export class WydatkiService {

  private wydatki: Wydatek[];
  private nextId: number;

  constructor() {
    this.wydatki = [
      new Wydatek(1, 'Tankowanie', 252.43, '', new Date(2018, 4, 30)),
      new Wydatek(2, 'Myjnia', 75, '', new Date(2018, 4, 2)),
      new Wydatek(3, 'Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
      new Wydatek(4, 'Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
      new Wydatek(5, 'Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 527, 48),
      new Wydatek(6, 'Tankowanie', 257.30, '', new Date(2019, 0, 13), null, 35)
    ];
    this.nextId = 7;
  }

  getSum() {
    let sum = 0;
    this.wydatki.forEach(item => { sum += item.kwota; });
    return parseFloat(sum.toFixed(2));
  }

  getSumByCategory() {
    const categoryList = this.getKategorie();
    const sumByCategory = [0.0, 0.0, 0.0, 0.0];
    for (let j = 0; j < categoryList.length; j++) {
      this.wydatki.forEach(item => {
        if (item.kategoria === categoryList[j]) {
          sumByCategory[j] += item.kwota;
        }
      });
    }

    console.log(categoryList.length);
    console.log(typeof(sumByCategory));
    console.log(typeof(this.wydatki[1].kwota));

    return sumByCategory;
  }

  getWydatki() {
    return this.wydatki;
  }

  getKategorie(): string[] {
    return KATEGORIE;
  }

  dodajWydatek(nowyWydatek: Wydatek): void {
    nowyWydatek.id = this.nextId++;
    this.wydatki.push(nowyWydatek);
  }

  usunWydatek(id: number): void {
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
  }

  dodajKategorie(kategoria: HTMLInputElement) {
    KATEGORIE.push(kategoria.value);
    kategoria.value = '';
  }

  usunKategorie(kategoria: string) {
    this.wydatki.forEach((item) => {
      if (item.kategoria === kategoria) {
        alert('Kategoria jest przypisana do wydatku');
        return;
      }
    });

    KATEGORIE.filter((item) => {
      return item !== kategoria;
    });

  }
}
