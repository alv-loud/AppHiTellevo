import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public aFAuth: AngularFireAuth) {
    aFAuth.authState.subscribe( user => (this.isLogged = user));

   }

   //login




   //registro



}
