import { Wydatek, KATEGORIE } from './../wydatek';
import { WydatkiService } from './../wydatki.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statystyki-wydatkow',
  templateUrl: './statystyki-wydatkow.component.html',
  styleUrls: ['./statystyki-wydatkow.component.css']
})
export class StatystykiWydatkowComponent implements OnInit {
  sumaWydatkow: number;
  sumaWydatkowKategoria: number[];
  kategorieWydatkow: String[];
  biezaceWydatki: Wydatek[];
  whatGroup: string;
  currentSum: number;

  constructor(private wydatkiService: WydatkiService) {
    this.whatGroup = 'full';
    this.currentSum = 0;
  }

  ngOnInit() {
    this.sumaWydatkow = this.wydatkiService.getSum();
    this.sumaWydatkowKategoria = this.wydatkiService.getSumByCategory();
    this.kategorieWydatkow = this.wydatkiService.getKategorie();
    this.biezaceWydatki = this.wydatkiService.getWydatki();

    const currentMonth = new Date().getMonth();
    this.biezaceWydatki = this.biezaceWydatki.filter((el) => {
      if (el.data.getMonth() === currentMonth) {
        this.currentSum = this.currentSum + el.kwota;

        return el;
      }
    });
  }

  public changeStatus(status) {
    this.whatGroup = status;
  }
}
