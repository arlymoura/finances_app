import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  private payments;
  private debito;
  private total;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.payments = navParams.get("payments");
  this.debito = 0;
  
  for (let i in this.payments){
    console.log(this.payments[i].value);
    // console.log("*************************");
    // console.log(this.payments[i].amount);
      this.debito = (+this.debito + +this.payments[i].value);
      this.total = this.payments[i].amount;
    }
  console.log(this.debito);
  console.log(this.total);
  this.debito = ((+this.total) - (+this.debito)).toFixed(2);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    
    
  }

}
