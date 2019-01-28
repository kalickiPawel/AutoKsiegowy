import { Component, OnInit } from '@angular/core';
import { WydatkiService } from './../wydatki.service';
import { Router } from '@angular/router';

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

}
