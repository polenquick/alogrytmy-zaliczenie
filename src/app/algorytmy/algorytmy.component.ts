import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorytmy',
  templateUrl: './algorytmy.component.html',
  styleUrls: ['./algorytmy.component.css']
})
export class AlgorytmyComponent implements OnInit {
  array1 = [];
  originalNumbers1D: number[] = [1, 2, 6, 66, 66 , 66, 55, 44, 33, 12, 21, 22];

  constructor() { }

  ngOnInit(): void {
  }
  alfabetycznie(){
    this.array1= this.originalNumbers1D.sort();
  }
  rosnaco(){
   this.array1= this.originalNumbers1D.sort((a,b) => a - b);
  }
  evenElements(){
    this.array1 = this.originalNumbers1D.filter(v=>v%2===0);
  }
  divisibleBy4(){
    this.array1 = this.originalNumbers1D.filter(v=>v%4===0);
  }
  notDivisibleBy4() {
    this.array1 = this.originalNumbers1D.filter(v=>v%4!==0);
  }
  notDivisibleBy5(){
    this.array1 = this.originalNumbers1D.filter(v=>v%5!==0);
  }
}
