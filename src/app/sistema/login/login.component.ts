import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  rota = inject(Router);

  usuario: Usuario = new Usuario();

  login(){
    if (this.usuario.username == "admin" && this.usuario.password == "admin"){
    this.rota.navigate(['/admin/pessoas']);
    }
    else
      alert('Usuário ou senha incorretos!');
  }
    }
  


