import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientPage } from '../client/client';

@NgModule({
  declarations: [
    ClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientPage),
  ],
  exports: [
    ClientPage
  ]
})
export class ClientModule {}