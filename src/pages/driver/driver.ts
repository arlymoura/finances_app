import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";
import { DriveOnePage } from "../drive-one/drive-one";
import { ModalDrivePage } from "../modal-drive/modal-drive";
import { IndexPage } from "../index/index";

@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})

export class DriverPage {
  private data = {};
  public list_drive = new Array<any>();
  public list_drive_search = new Array<any>();
  public count: any;
  public loader: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider: ServiceProvider,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
                this.count = 0;
  }

  showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Error ao conectar no servidor. Verifique seu acesso a internet e tente novamente',
        buttons: ['OK']
      });
      alert.present();
    }


  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
       content: "Aguarde ...",
       duration: 10000
    });

    this.loader.present();

    this.data = this.serviceProvider.data;
    console.log('ionViewDidLoad DriverPage');

    this.serviceProvider.getDrives().subscribe (
        data => {
          
          const response = (data as any);
          const object_return = JSON.parse(response._body);
          this.list_drive = object_return;
          this.serviceProvider.data = this.list_drive;
          this.count = Object.keys(this.list_drive).length;
          this.list_drive_search = this.list_drive;
          this.loader.dismiss();

          
          console.log(object_return); 
        }, error=> {
                    this.loader.dismiss();
                    this.showAlert();
                    this.navCtrl.setRoot(IndexPage);

          console.log(error);
        } 
      )
  }

  goToDriveOnePage(object) {
     this.navCtrl.push(DriveOnePage, {"drive": object});
  }

    presentModal() {
    let modal = this.modalCtrl.create(ModalDrivePage);
    modal.present();
  }

  getItems(ev: any) {

      this.list_drive = this.list_drive_search;
      // this.text = this.textSerach;
      // this.count = this.count = Object.keys(this.list_clients).length
      // this.list_clients_search = this.list_clients;

      let val = ev.target.value;

      if (val && val.trim() != '') {
        // this.text = 'Encontrados ';
        this.list_drive = this.list_drive.filter((item) => {

          for (let key in item) {
            if (item[key].toString().toLowerCase().indexOf(val.toLowerCase()) > -1){
              return item;
            }
          }
        })
        this.count = Object.keys(this.list_drive).length

      }else{
        this.list_drive = this.list_drive_search;
        this.count = Object.keys(this.list_drive).length
      }
    }
}
