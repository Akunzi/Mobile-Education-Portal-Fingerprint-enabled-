import { Component } from '@angular/core';
import { IonicPage,PopoverController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }

  editcv(){   
    this.navCtrl.push('CvPage');         
  }       

  editprofile(){
    this.navCtrl.push('EditprofilePage'); 
  }  

}         