import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SQLite} from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { ClienteProvider } from '../providers/cliente/cliente';
import { AdcionaClientePage } from '../pages/adciona-cliente/adciona-cliente';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdcionaClientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdcionaClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    ClienteProvider
  ]
})
export class AppModule {}
