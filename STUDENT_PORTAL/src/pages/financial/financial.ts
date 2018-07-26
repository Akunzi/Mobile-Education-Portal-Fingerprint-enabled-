import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated'; 
import { Fees } from '../../models/fees';
import {
  FormGroup,
  FormControl 

} from '@angular/forms'; 


@IonicPage() 
@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html', 
})
export class FinancialPage {

  feesData: FirebaseObjectObservable<Fees>  

  constructor(private toast: ToastController, private alertCtrl: AlertController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {  

  }   

  ionViewWillLoad() { 
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {  
      this.feesData = this.afDatabase.object(`fees/${data.uid}`)   
    } 

    else {
      this.toast.create({
        message: `Could not find Authentication details`, 
        duration: 3000 
      }).present(); 
    }
    });  
  }    
   
  payfee() {         
    this.navCtrl.setRoot('Financial1Page');        
  } 
    
}        