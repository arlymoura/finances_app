import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";
/**
 * Generated class for the ModalSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-sale',
  templateUrl: 'modal-sale.html',
  providers: [
    ServiceProvider
  ]
})
export class ModalSalePage {

sale: any;
private data = {};
private client: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider: ServiceProvider,
              public viewCtrl: ViewController,
              private toastCtrl: ToastController) {

    this.client = navParams.get('client');
    this.sale = {date: new Date().toISOString()};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSalePage');
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Venda criada com sucesso',
    duration: 3000,
    cssClass: "mensageColor",
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present()
}

dismiss() {
  this.viewCtrl.dismiss();
}

createSale(item) {
  // this.sale = {client_id: this.client.id};
  // console.log(this.sale);
  // console.log(item);
  this.serviceProvider.createSale(this.sale)
    .then((items: Array<any>) => {
      // this.navCtrl.setRoot(ClientPage(this.client));

      this.presentToast();
      this.dismiss();
    })
}

}
