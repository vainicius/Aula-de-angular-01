import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './index/index.component';
import { PessoasdetailsComponent } from './pessoa/pessoasdetails/pessoasdetails.component';
import { CarrolistComponent } from './carro/carrolist/carrolist.component';
import { CarrodetailsComponent } from './carro/carrodetails/carrodetails.component';
import { Carro } from './carro/carro';
import { LivrolistComponent } from './livro/livrolist/livrolist.component';
import { LivrodetailsComponent } from './livro/livrodetails/livrodetails.component';

const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: 'full' },
    {
      path:"login", component: LoginComponent},
      { path: "admin", component: IndexComponent, children: [
        { path: "pessoas", component: PessoaComponent},
        { path: "pessoas/novo", component: PessoasdetailsComponent},
        { path: "pessoas/editar/:id", component: PessoasdetailsComponent},
      ]},
      { path: "carros-inicio", component: IndexComponent, children: [
        { path: "carros", component: CarrolistComponent },
        { path: "carros/novo", component: CarrodetailsComponent },
        { path: "carros/editar/:id", component: CarrodetailsComponent }, // Correção aqui
      ]},      
      { path: "livros", component: LivrolistComponent, children: [
        {
          path: "livros/novo", component: LivrodetailsComponent
        },
        {
          path: "livros/editar/:id", component: LivrodetailsComponent
        }
      ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
