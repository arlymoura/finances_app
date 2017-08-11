import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalClientModule } from "../pages/modal-client/modal-client.module";
import { ClientModule } from "../pages/client/client.module";
import { ModalSaleModule } from "../pages/modal-sale/modal-sale.module";
import { ServiceProvider } from '../providers/service/service';
import { PaymentModule } from "../pages/payment/payment.module";
import { IndexModule } from "../pages/index/index.module";
import { DriverModule } from "../pages/driver/driver.module";
import { DriveOneModule } from "../pages/drive-one/drive-one.module";
import { ModalDriveModule } from "../pages/modal-drive/modal-drive.module";
import { ModalPaymentModule } from "../pages/modal-payment/modal-payment.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModalClientModule,
    ClientModule,
    ModalSaleModule,
    HttpModule,
    PaymentModule,
    IndexModule,
    DriverModule,
    DriveOneModule,
    ModalDriveModule,
    ModalPaymentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
