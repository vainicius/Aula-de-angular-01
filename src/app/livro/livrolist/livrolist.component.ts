import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livrolist',
  templateUrl: './livrolist.component.html',
  styleUrls: ['./livrolist.component.scss']
})
export class LivrolistComponent {
  livrosList: Livro[] = [];

  modalService = inject(NgbModal);

  

  abrirModal(abc: any){
    this.modalService.open(abc, {size: 'lg'});
  }
 

  addList(livro: Livro){
    this.livrosList.push(livro);
    this.close();
  }

  close(){
    this.modalService.dismissAll
  }

}

