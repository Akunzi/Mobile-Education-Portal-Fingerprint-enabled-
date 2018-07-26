import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';   
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage { 

  history = {} as History;  

  constructor(private afAuth: AngularFireAuth, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }
 
  viewhistory() {  
    this.afAuth.authState.take(1000).subscribe(auth => {  
      this.afDatabase.object(`history/${auth.uid}`).set(this.history)      
        .then(() => this.navCtrl.setRoot('SettingsPage'));                 
    })     
}     
  
} 
