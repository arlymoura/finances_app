import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { ModalClientPage } from '../modal-client/modal-client';
import { ClientPage } from "../client/client";
import { ServiceProvider } from "../../providers/service/service";
import { IndexPage } from "../index/index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ServiceProvider
  ]
})

export class HomePage {

  public list_clients = new Array<any>();
  public list_clients_search = new Array<any>();
  public count: any;
  public loader: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private serviceProvider: ServiceProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
                this.count = 0;
  }

  presentModal(obj) {
    let modal = this.modalCtrl.create(ModalClientPage, {"client": obj});
    modal.onDidDismiss(data => {
     console.log(data);
     this.getClients();
   });
    modal.present();

  }

   goToClientPage(obj) {
    this.navCtrl.push(ClientPage, {"client": obj});

  }

  ionViewDidLoad() {
    this.getClients();
    }

  getClients(){
    this.loader = this.loadingCtrl.create({
       content: "Aguarde ...",
       duration: 10000
    });

    this.loader.present();

    this.serviceProvider.getClients().subscribe (
        data => {

          const response = (data as any);
          const object_return = JSON.parse(response._body);
          this.list_clients = object_return;
          this.serviceProvider.data = this.list_clients;
          this.count = Object.keys(this.list_clients).length;
          this.list_clients_search = this.list_clients;
          this.loader.dismiss();
        }, error=> {
          this.loader.dismiss();
          console.log(error);
          this.showAlert();
          this.navCtrl.setRoot(IndexPage);
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

    getItems(ev: any) {
      this.list_clients = this.list_clients_search;
      // this.text = this.textSerach;
      // this.count = this.count = Object.keys(this.list_clients).length
      // this.list_clients_search = this.list_clients;

      let val = ev.target.value;

      if (val && val.trim() != '') {
        // this.text = 'Encontrados ';
        this.list_clients = this.list_clients.filter((item) => {

          for (let key in item) {
            if (item[key] != undefined){
              if (item[key].toString().toLowerCase().indexOf(val.toLowerCase()) > -1){
                return item;
              }
            }
          }
        })
        this.count = Object.keys(this.list_clients).length

      }else{
        this.list_clients = this.list_clients_search;
        this.count = Object.keys(this.list_clients).length
      }
    }

     deleteClient(item){
      this.serviceProvider.deleteClient(item)
      .then((notes: Array<any> )=>{
        this.getClients();
      }, (error) => {
        console.log('Erro ao Carregar os Clientes ', error)
      })
    }
}
