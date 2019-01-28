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
  dodajKategorie(kategoria: string) {
    KATEGORIE.push(kategoria);
  }
  usunKategorie(kategoria: string) {
    KATEGORIE.filter(function(ele) { return ele !== kategoria;
    });
  }
}
