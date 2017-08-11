import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";


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
              public viewCtrl: ViewController,
              private toastCtrl: ToastController) {
  this.client ={};


  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Cliente criado com sucesso',
    duration: 3000,
    cssClass: "mensageColor",
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present()
}

  ionViewDidLoad() {
    this.data = this.serviceProvider.data;

  }

  dismiss() {
    this.viewCtrl.dismiss();
 }

  createClient(item) {
    this.serviceProvider.createClient(this.client)
      .then((items: Array<any>) => {
        // this.navCtrl.setRoot(ClientPage(this.client));
        this.presentToast();
        this.dismiss();
      })
  }

}
