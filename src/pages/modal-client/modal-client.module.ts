import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalClientPage } from '../modal-client/modal-client';

@NgModule({
  declarations: [
    ModalClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalClientPage),
  ],
  exports: [
    ModalClientPage
  ]
})
export class ModalClientModule {}