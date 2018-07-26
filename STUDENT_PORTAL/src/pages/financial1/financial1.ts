import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular' 
import { Fees } from '../../models/fees';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated'; 

@IonicPage()
@Component({
  selector: 'page-financial1',
  templateUrl: 'financial1.html', 
})
export class Financial1Page {

  fees = {} as Fees;    
  
  constructor(private afAuth: AngularFireAuth, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {  
  }

  payfees() {   
    this.afAuth.authState.take(1).subscribe(auth => {    
      this.afDatabase.object(`fees/${auth.uid}`).set(this.fees)      
        .then(() => this.navCtrl.setRoot('FinancialPage'));                      
    })       
}     

}      