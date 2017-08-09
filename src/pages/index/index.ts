import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { DriverPage } from "../driver/driver";

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  goToClientPage() {
    this.navCtrl.push(HomePage);
  }

  goToDriverPage() {
    this.navCtrl.push(DriverPage);
  }

}
