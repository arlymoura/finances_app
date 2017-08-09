import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriveOnePage } from '../drive-one/drive-one';

@NgModule({
  declarations: [
    DriveOnePage,
  ],
  imports: [
    IonicPageModule.forChild(DriveOnePage),
  ],
  exports: [
    DriveOnePage
  ]
})
export class DriveOneModule {}