import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private Fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router) { 
      this.recuperarUsuario = this.Fb.group({
        correo: ['', Validators.required]
      })
    }

  ngOnInit() {
  }
  goToInicio(){
    this.router.navigate(['/inicio'])

  }


  recuperar(){
    const email = this.recuperarUsuario.value.correo;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() =>{

      alert(console.log('Se ha enviado un link de recuperacion a su correo electronico'))

      this.router.navigate(['/inicio']);

    }).catch((error)=>{
      this.loading = false; // para el progres indicators
      //alert(this.firebaseError(error.code));
    }) 
  }

}
