import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  formularioInicio: FormGroup;
  loginUsuario: FormGroup;
  loading: boolean = false;

  constructor(private Fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router) { 
      this.loginUsuario = this.Fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
    }

    login(){
      const email = this.loginUsuario.value.email;
      const password = this.loginUsuario.value.password;

      this.loading = true;
      this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{
        this.router.navigate(['/'])
      })

    }
  ngOnInit():void {}
}