import { NgModel } from "@angular/forms";

export class Carro {
    modelo!: String;
    marca!: String;
    cor!: String;
    placa!: String;

    constructor(nome: string, marca: string, cor: string, placa: string){
        this.modelo = nome;
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
    }


}
