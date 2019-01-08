import { Wydatek } from './../wydatek';
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
  wydatki: Wydatek[];

  constructor(private wydatkiService: WydatkiService) { }

  ngOnInit() {
    this.sumaWydatkow = this.wydatkiService.getSum();
    this.sumaWydatkowKategoria = this.wydatkiService.getSumByCategory();
  }
}
