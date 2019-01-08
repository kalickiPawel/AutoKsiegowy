import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Injectable()
export class WydatkiService {

  /*
  private wydatki: AngularFireList<Wydatek>;
  constructor(private db: AngularFireDatabase){
    this.wydatki = this.db.list<Wydatek>('/wydatki');
  }
  getWydatki(): Overable<Wydatek[]>{
    return this.wydatki.valueChanges();
  }
  */

  private wydatki: Wydatek[];
  private nextId: number;
  private sum: number;
  private sumByCategory: number[];
  private categoryList: String[];

  constructor() {
    this.wydatki = [
      new Wydatek(1, 'Tankowanie', 252.43, '', new Date(2018, 4, 30)),
      new Wydatek(2, 'Myjnia', 75, '', new Date(2018, 4, 2)),
      new Wydatek(3, 'Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
      new Wydatek(4, 'Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
      new Wydatek(5, 'Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 527, 48),
      new Wydatek(6, 'Tankowanie', 257.30, '', new Date(2017, 7, 13), null, 35)
    ];
    this.nextId = 7;
  }

  getSum() {
    this.sum = 0;
    for (let i = 0; i < this.wydatki.length; i++) {
      this.sum += this.wydatki[i].kwota;
    }
    return this.sum;
  }

  getSumByCategory() {
    this.categoryList = KATEGORIE;
    /*
    this.categoryList.forEach(kategoria -> {})
    */

    for (let i = 0; i < this.wydatki.length; i++) {
      for (let j = 0; j < this.categoryList.length; j++) {
        // tslint:disable-next-line:triple-equals
        if (this.categoryList[j] == this.wydatki[i].kategoria) {
          this.sumByCategory[j] += this.wydatki[i].kwota;
        }
      }
    }
    return this.sumByCategory;
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
}
