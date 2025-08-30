import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  form: FormGroup;
  erro: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }
registro() {
  const { email, senha, confirmarSenha } = this.form.value;
  if (senha !== confirmarSenha) {
    this.erro = 'As senhas não coincidem';
    return;
  }
  this.auth.registrar(email, senha).subscribe(
    (res) => {
      if (!res) {
        this.erro = 'E-mail já cadastrado';
        return;
      }
      localStorage.setItem('usuario', JSON.stringify(res));
      this.router.navigate(['/']);
    },
    (err) => {
      this.erro = 'Erro ao registrar usuário';
        }
    );
}
}