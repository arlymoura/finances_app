import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController, LoadingController } from 'ionic-angular';
import { ModalClientPage } from '../modal-client/modal-client';
import { ClientPage } from "../client/client";
import { ServiceProvider } from "../../providers/service/service";

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
              public loadingCtrl: LoadingController) {
                this.count = 0;
  }

  presentModal(obj) {
    let modal = this.modalCtrl.create(ModalClientPage, {"client": obj});
    modal.present();
  }

   goToClientPage(obj) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ClientPage, {"client": obj});
  }

  ionViewDidLoad() {
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
        } 
      )
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
            if (item[key].toString().toLowerCase().indexOf(val.toLowerCase()) > -1){
              return item;
            }
          }
        })
        this.count = Object.keys(this.list_clients).length

      }else{
        this.list_clients = this.list_clients_search;
        this.count = Object.keys(this.list_clients).length
      }
    }
}
