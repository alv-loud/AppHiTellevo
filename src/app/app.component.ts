import { Component } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Viajar', url: '/viaje', icon: 'paper-plane' },
    { title: 'Programar un viaje', url: '/programar', icon: 'hourglass' },
  ];
  //public ayuda = ['ayuda'];
  constructor() {}
}
