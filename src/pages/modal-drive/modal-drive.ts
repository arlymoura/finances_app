import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";

/**
 * Generated class for the ModalDrivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-drive',
  templateUrl: 'modal-drive.html',
  providers: [
    ServiceProvider
  ]
})
export class ModalDrivePage {

  drive: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider: ServiceProvider,
              public viewCtrl: ViewController,
              private toastCtrl: ToastController,
              public alertCtrl: AlertController) {
              this.drive = {};
  }

  showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Error ao conectar no servidor. Verifique seu acesso a internet e tente novamente',
        buttons: ['OK']
      });
      alert.present();
    }

  dismiss() {
    this.viewCtrl.dismiss();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDrivePage');
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Rota criada com sucesso',
    duration: 3000,
    cssClass: "mensageColor",
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present()
}

createDrive(item) {
    this.serviceProvider.createDrive(this.drive)
      .then((items: Array<any>) => {

        this.presentToast();
        this.dismiss();

      })
  }


}
