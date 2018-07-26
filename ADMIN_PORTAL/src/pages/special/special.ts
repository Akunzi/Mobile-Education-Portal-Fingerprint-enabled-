import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { Grade } from '../../models/grade';    
import { Grade1 } from '../../models/grade1';

@IonicPage()  
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',   
})
export class SpecialPage {     
      
  grade = {} as Grade;
  grade1 = {} as Grade1;       
 
  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }   

uploadgrade() {     
  this.afAuth.authState.take(1000).subscribe(auth => { 
    this.afDatabase.object(`grade/${auth.uid}`).set(this.grade)    
      .then(() => this.navCtrl.setRoot('Tab1Page'));                 
  })       
}       
}    