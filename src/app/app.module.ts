import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { MenuSuperiorComponent } from './menu/menu-superior/menu-superior.component';
import { FooterComponent } from './app/footer/footer.component';
import { PessoasdetailsComponent } from './pessoa/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { CarrolistComponent } from './carro/carrolist/carrolist.component';
import { LivrolistComponent } from './livro/livrolist/livrolist.component';
import { CarrodetailsComponent } from './carro/carrodetails/carrodetails.component';
import { LivrodetailsComponent } from './livro/livrodetails/livrodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaComponent,
    MenuSuperiorComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    IndexComponent,
    CarrolistComponent,
    LivrolistComponent,
    CarrodetailsComponent,
    LivrodetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
