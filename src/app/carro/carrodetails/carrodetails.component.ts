import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';
import { CarrolistComponent } from '../carrolist/carrolist.component';

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})

export class CarrodetailsComponent {
  rota = inject(ActivatedRoute);
  carro: Carro = new Carro("","","","");

  @Output() retorno = new EventEmitter<Carro>();

  carroList = inject(CarrolistComponent);

  constructor(){
    let id = this.rota.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvar(){
    this.retorno.emit(this.carro);
  }
}
