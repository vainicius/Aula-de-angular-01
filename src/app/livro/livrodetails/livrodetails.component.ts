import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Livro } from '../livro';
import { ActivatedRoute } from '@angular/router';
import { LivrolistComponent } from '../livrolist/livrolist.component';

@Component({
  selector: 'app-livrodetails',
  templateUrl: './livrodetails.component.html',
  styleUrls: ['./livrodetails.component.scss']
})
export class LivrodetailsComponent {
  rota = inject(ActivatedRoute);
  livro: Livro = new Livro();

  @Output() retorno = new EventEmitter<Livro>();

  carroList = inject(LivrolistComponent);

  constructor(){
    let id = this.rota.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvar(){
    this.retorno.emit(this.livro);
  }
}
