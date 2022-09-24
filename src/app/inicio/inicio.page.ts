import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  formularioInicio: FormGroup;

  constructor(public fb:FormBuilder,
    public alertController: AlertController,
    private router: Router,
    public navCtrl: NavController) {

    this.formularioInicio = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required)
    })

   }

  ngOnInit() {
  }
  goToRecuperar(){
    this.router.navigate(['/recuperar'])
  }


 async ingresar(){
    var f = this.formularioInicio.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'))
//validamos que los datos del formulario de registro sean iguales a los de inicio
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado'); 
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('principal');

    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste no son correctos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;

    }
  }

}
