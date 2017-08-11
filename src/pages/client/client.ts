import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalSalePage } from "../modal-sale/modal-sale";
import { ServiceProvider } from "../../providers/service/service";
import { PaymentPage } from "../payment/payment";

@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
  providers: [
    ServiceProvider
  ]
})

export class ClientPage {
  private data = {};
  private client;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public serviceProvider: ServiceProvider) {
    this.client = navParams.get('client');
  }

  ionViewDidLoad() {
    this.data = this.serviceProvider.data;
  }

   presentModal(obj) {
    // let modal = this.modalCtrl.create(ModalSalePage);
    let modal = this.modalCtrl.create(ModalSalePage, {"client": obj});
    modal.present();
  }

  goToPaymentPage(object) {
    this.navCtrl.push(PaymentPage, {"bill": object});
  }
}
