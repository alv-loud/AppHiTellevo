import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    
  };

  constructor() { }

  ngOnInit() {
  }
  ionSlideDidChange(event) {
    console.log(event);
    
  }

}
