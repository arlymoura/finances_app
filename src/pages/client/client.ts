import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
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
  private loader: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public serviceProvider: ServiceProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
    this.client = navParams.get('client');
    
  }

  ionViewDidLoad() {
    this.getClient();
  }

  getClient(){
    console.log('Hello Cliente One')

      this.loader = this.loadingCtrl.create({
         content: "Aguarde ...",
         duration: 10000
      });

      this.loader.present();

      this.serviceProvider.getOneClient(this.client.id).subscribe (
          data => {
            const response = (data as any);
            const object_return = JSON.parse(response._body);
            this.client = object_return;
            this.loader.dismiss();
          }, error=> {
            this.loader.dismiss();
            console.log(error);
            this.showAlert();

          }
        )
  }

   presentModal(obj) {
    // let modal = this.modalCtrl.create(ModalSalePage);
    let modal = this.modalCtrl.create(ModalSalePage, {"client": obj});
    modal.onDidDismiss(data => {
     console.log(data);
     this.getClient();
   });
    modal.present();
  }

  goToPaymentPage(object) {
    this.navCtrl.push(PaymentPage, {"bill": object});
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error ao conectar no servidor. Verifique seu acesso a internet e tente novamente',
      buttons: ['OK']
    });
    alert.present();
  }



}
