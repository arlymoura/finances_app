import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProvider {

  private baseUrl = "http://192.168.0.19:3000";
  public data = {};
  public drive = {};

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getClients() {
    return this.http.get(this.baseUrl + "/clients");
  }

  getDrives() {
    return this.http.get(this.baseUrl + "/drives")
  }

  createClient(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    let body = JSON.stringify({
       client: item,
    });

    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + "/clients", body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }


  createDrive(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    let body = JSON.stringify({
       drive: item,
    });

    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + "/drives", body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  createSale(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    let body = JSON.stringify({
       bill: item,
    });

    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + "/bills", body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  createPayment(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    let body = JSON.stringify({
       payment: item,
    });

    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + "/payments", body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

}
