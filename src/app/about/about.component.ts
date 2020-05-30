import { Component, OnInit } from '@angular/core';
import {Uczen} from '../uczen';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Uczniowie: Uczen[] = [{name: "Beata", nazwisko: "Brzoza", wiek: 20}];

  constructor() {
  }
  ngOnInit(): void {
    for (let i = 0; i <= 5; i++) {
      this.Uczniowie.push({name: 'Marcin', nazwisko: 'Kołodziej' + i, wiek: 12 + i})
    }
    this.Uczniowie.push({name: 'Ąnna', nazwisko: 'Acka', wiek: 20});
    this.Uczniowie.push({name: 'Anna', nazwisko: 'Ąbka', wiek: 18});
    this.Uczniowie.push({name: 'Zbigniew', nazwisko: 'Złoto', wiek: 55});
    for (const uczen of this.Uczniowie) {
      console.log(uczen.name + ' ' + uczen.nazwisko);
    }
  }
  sortujPl() {
    const collator = new Intl.Collator('pl');
    this.Uczniowie.sort((uczen1, uczen2) => {
      return collator.compare(uczen2.name, uczen1.name);
    });
  }

  sortuj1Pl() {
    const collator = new Intl.Collator('pl')
    this.Uczniowie.sort((uczen1, uczen2) =>{
      return collator.compare(uczen1.name, uczen2.name);
    });
  }
  sortuj3() {
    const collator = new Intl.Collator('pl');
    this.Uczniowie.sort((uczen1, uczen2) => {
      return collator.compare(uczen2.nazwisko, uczen1.nazwisko);
    });
  }

  sortuj4() {
    const collator = new Intl.Collator('pl')
    this.Uczniowie.sort((uczen1, uczen2) =>{
      return collator.compare(uczen1.nazwisko, uczen2.nazwisko);
    });
  }

}
