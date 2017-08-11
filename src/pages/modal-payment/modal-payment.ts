import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";

@Component({
  selector: 'page-modal-payment',
  templateUrl: 'modal-payment.html',
  providers: [
    ServiceProvider
  ]
})
export class ModalPaymentPage {

  payment: any;
  private bill: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider: ServiceProvider,
              public viewCtrl: ViewController,
              private toastCtrl: ToastController,
              public alertCtrl: AlertController) {
              this.payment = {};
              this.bill = navParams.get('bill');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPaymentPage');
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

createPayment(item) {
  this.serviceProvider.createPayment(this.payment)
    .then((items: Array<any>) => {
      this.presentToast();
      this.dismiss();
    })
}

}
