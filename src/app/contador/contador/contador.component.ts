import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h1>La base es : {{b}}</h1>
        <button (click)="acumular(b)">+{{b}}</button>
        <span>{{b}}</span>
        <button (click)="acumular(-b)">-{{b}}</button>
    `
})
export class ContadorComponent {
    title: string = 'bases' ;
    numero: number=10;
    b:number=5;
  
    acumular(valor:number){
      this.numero+=valor;
    }

}