import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = ''; // variável pra mensagem inline

  constructor(private adminService: AdminService, private router: Router) {}

 login() {
  this.erro = ''; // limpa erro
  this.adminService.login(this.email, this.senha).subscribe(users => {
    if (users.length > 0) {
      const user = users[0];
      localStorage.setItem('usuario', JSON.stringify(user));

      if (user.isAdmin) {
        this.router.navigate(['/admin']); // admin vai pra dashboard
      } else {
        this.router.navigate(['/home']); // usuário normal vai pra página inicial
      }
    } else {
      this.erro = 'Email ou senha inválidos';
    }
  });
}
}
