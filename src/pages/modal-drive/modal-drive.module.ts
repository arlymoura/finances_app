import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDrivePage } from '../modal-drive/modal-drive';

@NgModule({
  declarations: [
    ModalDrivePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDrivePage),
  ],
  exports: [
    ModalDrivePage
  ]
})
export class ModalDriveModule {}