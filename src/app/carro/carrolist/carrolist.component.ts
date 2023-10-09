import { Component, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from '../carro';
import { tick } from '@angular/core/testing';
import { CarrodetailsComponent } from '../carrodetails/carrodetails.component';

@Component({
  selector: 'app-carrolist',
  templateUrl: './carrolist.component.html',
  styleUrls: ['./carrolist.component.scss']
})
export class CarrolistComponent {
  

  carrosList: Carro[] = [];

  modalService = inject(NgbModal);

  

  abrirModal(abc: any){
    this.modalService.open(abc, {size: 'lg'});
  }
 

  addList(carro: Carro){
    this.carrosList.push(carro);
    this.close();
  }

  close(){
    this.modalService.dismissAll
  }

}
