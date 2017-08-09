import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalDrivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-drive',
  templateUrl: 'modal-drive.html',
})
export class ModalDrivePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDrivePage');
  }

}
