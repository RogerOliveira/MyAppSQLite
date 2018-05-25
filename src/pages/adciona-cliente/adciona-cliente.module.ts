import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdcionaClientePage } from './adciona-cliente';

@NgModule({
  declarations: [
    AdcionaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AdcionaClientePage),
  ],
})
export class AdcionaClientePageModule {}
