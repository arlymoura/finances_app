import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
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
  private loader: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public serviceProvider: ServiceProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {

  this.bill = navParams.get("bill");

  }

  ionViewDidLoad() {
    this.getPayments();
  }

  getPayments(){
    console.log('ionViewDidLoad PaymentPage');

    this.loader = this.loadingCtrl.create({
       content: "Aguarde ...",
       duration: 10000
    });

    this.loader.present();

    this.serviceProvider.getOneBill(this.bill.id).subscribe (
        data => {
          const response = (data as any);
          const object_return = JSON.parse(response._body);
          this.bill = object_return;

          this.payments = this.bill.payments;
          this.debito = 0;

          for (let i in this.payments){
            this.debito = (+this.debito + +this.payments[i].value);
            this.total = this.payments[i].amount;
          }

          this.debito = ((+this.total) - (+this.debito)).toFixed(2);
          this.loader.dismiss();
        }, error=> {
          this.loader.dismiss();

          this.showAlert();

        }
      )
  }

  presentModal(obj) {
   // let modal = this.modalCtrl.create(ModalSalePage);
   let modal = this.modalCtrl.create(ModalPaymentPage, {"bill": obj});
   modal.onDidDismiss(data => {
    console.log(data);
    this.getPayments();
  });
   modal.present();
 }

 showAlert() {
   let alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: 'Error ao conectar no servidor. Verifique seu acesso a internet e tente novamente',
     buttons: ['OK']
   });
   alert.present();
 }

 deleteSale(item){
      this.serviceProvider.deleteSale(item)
      .then((notes: Array<any> )=>{
        this.getClients();
      }, (error) => {
        console.log('Erro ao Carregar os Clientes ', error)
      })
    }

}
