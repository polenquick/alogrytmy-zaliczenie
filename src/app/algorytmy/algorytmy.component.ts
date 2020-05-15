import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorytmy',
  templateUrl: './algorytmy.component.html',
  styleUrls: ['./algorytmy.component.css']
})
export class AlgorytmyComponent implements OnInit {
  array1 = [];
  primaryArray: number[] = [1, 2, 6, 66, 66 , 66, 55, 55, 66, 44, 33, 12, 21, 22, 3000];
  constructor() { }

  ngOnInit(): void {
  }
  alfabetycznie(){
    this.array1 = this.primaryArray.sort();
  }
  rosnaco(){
   this.array1 = this.primaryArray.sort((a, b) => a - b);


  }
 dublowanie(){
this.array1= this.primaryArray.filter((item, index) => this.primaryArray.indexOf(item) === index);
 }
pieciocyfrowe(){
    this.array1= this.primaryArray.filter(v=>v%3===0 && v>=1000 && v<10000);
}
  evenElements(){
    this.array1 = this.primaryArray.filter(v=> v % 2 === 0);
  }
  divisibleBy4(){
    this.array1 = this.primaryArray.filter(v=>v%4===0);
  }
  notDivisibleBy4() {
    this.array1 = this.primaryArray.filter(v=>v%4!==0);
  }

}
