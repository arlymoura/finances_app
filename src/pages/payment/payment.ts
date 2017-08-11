import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPaymentPage } from "../modal-payment/modal-payment";
import { ServiceProvider } from "../../providers/service/service";

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
  providers: [
    ServiceProvider
  ]
})
export class PaymentPage {

  private payments;
  private bill;
  private debito;
  private total;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public serviceProvider: ServiceProvider) {
  this.bill = navParams.get("bill");
  this.payments = this.bill.payments;
  this.debito = 0;

  for (let i in this.payments){
    this.debito = (+this.debito + +this.payments[i].value);
    this.total = this.payments[i].amount;
  }

  this.debito = ((+this.total) - (+this.debito)).toFixed(2);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  presentModal(obj) {
   // let modal = this.modalCtrl.create(ModalSalePage);
   let modal = this.modalCtrl.create(ModalPaymentPage, {"bill": obj});
   modal.present();
 }

}
