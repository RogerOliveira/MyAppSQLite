import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';

/**
 * Generated class for the AdcionaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adciona-cliente',
  templateUrl: 'adciona-cliente.html',
  providers: [
    ClienteProvider
  ]
})
export class AdcionaClientePage {
  public cliente: Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteProvider: ClienteProvider) {
    this.cliente = new Cliente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdcionaClientePage');
  }

  cadastraCliente() {
    this.clienteProvider.inserir(this.cliente);
    this.navCtrl.pop();
  }

}
