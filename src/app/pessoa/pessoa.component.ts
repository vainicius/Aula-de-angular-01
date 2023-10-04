import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {
lista: Pessoa [] = [];

isMaior: boolean = true;

listaMenor: Pessoa [] = [];

constructor() {
  this.constructorMaior();
  this.constructorMenor();
}

ExibirIdadesMenores(){
  this.isMaior = false;
}

ExibirIdadesMaiores(){
  this.isMaior = true;
}


constructorMaior(){
  let pessoa1 = new Pessoa();
  pessoa1.nome = "Vinicius";
  pessoa1.idade = 36;

  let pessoa2 = new Pessoa();
  pessoa2.nome = "Jean";
  pessoa2.idade = 40;

  let pessoa3 = new Pessoa();
  pessoa3.nome = "Bouchra";
  pessoa3.idade = 90;

  let pessoa4 = new Pessoa();
  pessoa4.nome = "Piegat"
  pessoa4.idade = 87

  let pessoa5 = new Pessoa();
  pessoa5.nome = "Gustavo"
  pessoa5.idade = 50

  let pessoa6 = new Pessoa();
  pessoa6.nome = "Felipe"
  pessoa6.idade = 35

  let pessoa7 = new Pessoa();
  pessoa7.nome = "Akl"
  pessoa7.idade = 89

  let pessoa8 = new Pessoa();
  pessoa8.nome = "Aquino"
  pessoa8.idade = 31
  
  let pessoa9 = new Pessoa();
  pessoa9.nome = "Luma"
  pessoa9.idade = 100;
  let pessoa10 = new Pessoa();
  pessoa10.nome = "Bob"
  pessoa10.idade = 31

  this.lista.push(pessoa1);
  this.lista.push(pessoa2);
  this.lista.push(pessoa3);
  this.lista.push(pessoa4);
  this.lista.push(pessoa5);
  this.lista.push(pessoa6);
  this.lista.push(pessoa7);
  this.lista.push(pessoa8);
  this.lista.push(pessoa9);
  this.lista.push(pessoa10);

} 
constructorMenor(){
  let pessoa1 = new Pessoa();
  pessoa1.nome = "Vinicius";
  pessoa1.idade = 29;

  let pessoa2 = new Pessoa();
  pessoa2.nome = "Jean";
  pessoa2.idade = 18;

  let pessoa3 = new Pessoa();
  pessoa3.nome = "Bouchra";
  pessoa3.idade = 10;

  let pessoa4 = new Pessoa();
  pessoa4.nome = "Piegat"
  pessoa4.idade = 15

  let pessoa5 = new Pessoa();
  pessoa5.nome = "Gustavo"
  pessoa5.idade = 10

  let pessoa6 = new Pessoa();
  pessoa6.nome = "Felipe"
  pessoa6.idade = 18

  let pessoa7 = new Pessoa();
  pessoa7.nome = "Akl"
  pessoa7.idade = 20

  let pessoa8 = new Pessoa();
  pessoa8.nome = "Aquino"
  pessoa8.idade = 16
  
  let pessoa9 = new Pessoa();
  pessoa9.nome = "Luma"
  pessoa9.idade = 25;
  let pessoa10 = new Pessoa();
  pessoa10.nome = "Bob"
  pessoa10.idade = 24

  this.listaMenor.push(pessoa1);
  this.listaMenor.push(pessoa2);
  this.listaMenor.push(pessoa4);
  this.listaMenor.push(pessoa3);
  this.listaMenor.push(pessoa5);
  this.listaMenor.push(pessoa6);
  this.listaMenor.push(pessoa7);
  this.listaMenor.push(pessoa8);
  this.listaMenor.push(pessoa9);
  this.listaMenor.push(pessoa10);

} 
}
