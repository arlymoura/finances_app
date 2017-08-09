import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSalePage } from '../modal-sale/modal-sale';

@NgModule({
  declarations: [
    ModalSalePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSalePage),
  ],
  exports: [
    ModalSalePage
  ]
})
export class ModalSaleModule {}