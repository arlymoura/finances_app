import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";
import { ClientPage } from "../client/client";

/**
 * Generated class for the ModalClientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-client',
  templateUrl: 'modal-client.html',
  providers: [
    ServiceProvider
  ]
})
export class ModalClientPage {
  private data = {};
  client: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider: ServiceProvider,
              public viewCtrl: ViewController) {
  this.client = {bills: Array<any>(), }; 


  }

  ionViewDidLoad() {
    this.data = this.serviceProvider.data;
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
 }

  createClient(item) {
    console.log(item);
    console.log(this.client);
    this.serviceProvider.createClient(this.client)
      .then((items: Array<any>) => {
        this.navCtrl.setRoot(ClientPage);
      }) 
  }

}
