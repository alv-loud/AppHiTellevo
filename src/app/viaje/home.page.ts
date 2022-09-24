import { Component, OnInit } from '@angular/core';  
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

//creo una propiedad de tipo mapbox
  mapa: Mapboxgl.Map


  ngOnInit() {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-71.5335659,-33.0335445], // posicion de inicio  // longitud , latitud
      zoom: 17.21 // el zoom del map
    });
  }

}
