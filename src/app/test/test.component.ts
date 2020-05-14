import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public BigInt: number;

  test() {
    var sum = 0;
    var array = [];

    for (var i = 1; ; i++) {
      var losowa = Math.random();
      console.log(i + ' wylosowana liczba to: ' + losowa);
      if ((array.indexOf(losowa.toString()) < 1)) {

        sum += losowa;
        var sum2 = 0;
        var array2 = [];
        var ilosc_prob = i;
        sum2 += ilosc_prob;

        array.push(losowa.toString());
        console.log('AKTUALNA SUMA: ' + sum);

        array2.push(ilosc_prob.toString());

      }
      if (sum >= 1) {
        break;
      }
    }

    const ileChceProb = this.BigInt = 1000000;
    var srednia = 0;
    for (var k = 1; k < ileChceProb; k++) {
      var random = 0;
      var ileLokalnychProb = 0;
      while (random < 1) {
        ileLokalnychProb++;
        random += Math.random();

      }
      srednia += ileLokalnychProb / ileChceProb;
    }

    console.log('Suma wynosi: ' + sum + ' po ' + ilosc_prob + ' probach');
    console.log('Srednia po wykonaniu ' + ileChceProb + ' razy wynosi: ' + srednia);
  }

  constructor() {
  }


  ngOnInit(): void {
  }


}




