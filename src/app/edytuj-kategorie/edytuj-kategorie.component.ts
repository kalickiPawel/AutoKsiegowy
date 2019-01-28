import { Component, OnInit } from '@angular/core';
import { WydatkiService } from './../wydatki.service';
import { Router } from '@angular/router';
import { Wydatek, KATEGORIE } from './../wydatek';

@Component({
  selector: 'app-edytuj-kategorie',
  templateUrl: './edytuj-kategorie.component.html',
  styleUrls: ['./edytuj-kategorie.component.css']
})

export class EdytujKategorieComponent implements OnInit {

  kategorie: string[];

  constructor(private wydatkiService: WydatkiService, private router: Router) { }

  ngOnInit() {
    this.kategorie = this.wydatkiService.getKategorie();
  }

  dodajKategorie(kategoria: HTMLInputElement) {
    this.wydatkiService.dodajKategorie(kategoria);
  }

  usunKategorie(kategoria: string) {
    this.wydatkiService.usunKategorie(kategoria);
    this.kategorie = this.wydatkiService.getKategorie();
  }
}
