import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-eexam',
  templateUrl: 'eexam.html',
})
export class EexamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  example() {
    this.navCtrl.setRoot('Eexam1Page');     
  }

} 
