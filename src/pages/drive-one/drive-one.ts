import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";
import { ClientPage } from "../client/client";

@Component({
  selector: 'page-drive-one',
  templateUrl: 'drive-one.html',
  providers: [
    ServiceProvider
  ]
})
export class DriveOnePage {
  private driveonelocal;
  private loader: any;
  // public list_clients = new Array<any>();
  public list_clients_search = new Array<any>();
  public count: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider: ServiceProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {

  this.driveonelocal = navParams.get("drive");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriveOnePage');

    this.loader = this.loadingCtrl.create({
       content: "Aguarde ...",
       duration: 10000
    });

    this.loader.present();

    this.serviceProvider.getOneDrive(this.driveonelocal.id).subscribe (
        data => {
          const response = (data as any);
          const object_return = JSON.parse(response._body);
          this.driveonelocal = object_return;
          this.count = Object.keys(this.driveonelocal.clients).length;
          this.list_clients_search = this.driveonelocal.clients;
          this.loader.dismiss();
        }, error=> {
          this.loader.dismiss();

          this.showAlert();

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

  goToClientPage(obj) {
   this.navCtrl.push(ClientPage, {"client": obj});
 }


 getItems(ev: any) {

   this.driveonelocal.clients = this.list_clients_search;

   let val = ev.target.value;

   if (val && val.trim() != '') {
     
     this.driveonelocal.clients = this.driveonelocal.clients.filter((item) => {

       for (let key in item) {
         if (item[key] != undefined){
           if (item[key].toString().toLowerCase().indexOf(val.toLowerCase()) > -1){
             return item;
           }
         }
       }
     })
     this.count = Object.keys(this.driveonelocal.clients).length

   }else{
     this.driveonelocal.clients = this.list_clients_search;
     this.count = Object.keys(this.driveonelocal.clients).length
   }
 }

}
