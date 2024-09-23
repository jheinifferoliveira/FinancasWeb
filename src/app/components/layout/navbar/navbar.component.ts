import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthHelper } from '../../../helpers/auth.helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuthenticated: boolean = false;
  nomeUsuario: string = '';
  emailUsuario: string = '';

  constructor(
    private authHelper: AuthHelper
  ) { }

  ngOnInit() {
    const usuario = this.authHelper.getUser();
    if (usuario != null) {
      this.isAuthenticated = true;
      this.nomeUsuario = usuario.nome;
      this.emailUsuario = usuario.email;
    }
  }

  logout(){
    if(confirm('Deseja realmente sair do sistema?')){
      this.authHelper.signOut();
      location.href = '/pages/autenticar-usuario';
    }
  }
}
