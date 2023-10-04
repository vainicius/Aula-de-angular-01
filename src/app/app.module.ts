import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaListComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { MenuSuperiorComponent } from './menu/menu-superior/menu-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaComponent,
    PessoaListComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
