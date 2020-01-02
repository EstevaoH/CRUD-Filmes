import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: '';
  senha: '';
  erro: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginService.onLogin(this.login, this.senha)) {
      this.erro = 'Usuario valido';
      this.router.navigate(['/tabela-filme']);
      console.log(this.erro)
    } else {
      this.erro = 'Usuário ou senha inválidos!';
      console.log(this.erro)
    }
  }
}
