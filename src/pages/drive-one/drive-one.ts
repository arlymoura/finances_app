import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-drive-one',
  templateUrl: 'drive-one.html',
})
export class DriveOnePage {
  private driveonelocal;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  this.driveonelocal = navParams.get("drive");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriveOnePage');
  }

}
