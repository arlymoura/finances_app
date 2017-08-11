import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPaymentPage } from '../modal-payment/modal-payment';

@NgModule({
  declarations: [
    ModalPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPaymentPage),
  ],
  exports: [
    ModalPaymentPage
  ]
})
export class ModalPaymentModule {}
