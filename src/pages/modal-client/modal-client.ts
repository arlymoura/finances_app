import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ModalController, LoadingController, AlertController } from 'ionic-angular';
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
  private drives: any;
  public loader: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private toastCtrl: ToastController,
              public serviceProvider: ServiceProvider,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
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
    // this.data = this.serviceProvider.data;
    this.getDrives();
    console.log(this.drives);

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

  getDrives(){
    this.loader = this.loadingCtrl.create({
       content: "Aguarde ...",
       duration: 10000
    });

    this.loader.present();

    console.log('ionViewDidLoad DriverPage');

    this.serviceProvider.getDrives().subscribe (
        data => {
          const response = (data as any);
          const object_return = JSON.parse(response._body);
          this.drives = object_return;
          this.loader.dismiss();
          console.log(object_return);
        }, error=> {
                    this.loader.dismiss();
                    this.showAlert();
          console.log(error);
        }
      )
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
