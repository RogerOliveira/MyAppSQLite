import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdcionaClientePage } from '../adciona-cliente/adciona-cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  cadastrarCliente(){
    this.navCtrl.push(AdcionaClientePage);
  }

}
