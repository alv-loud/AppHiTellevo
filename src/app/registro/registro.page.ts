import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControlName } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registrarUsuario: FormGroup;

  constructor(
    private Fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.registrarUsuario = this.Fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    //console.log(email, password, repetirPassword)

    if (password !== repetirPassword) {
    }

    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/inicio']);
        alert(console.log(user));
      })
      .catch((error) => {
        console.log(error);
        alert(this.firebaseError(error.code));
      });
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'el usuario ya existe';
      case 'auth/weak-password':
        return 'La contraseña debe tener mas de 6 caracteres';
      case 'auth/invalid-email':
        return 'Correo Invalido';
      default:
        return 'Error Desconocido';
    }
  }
}
