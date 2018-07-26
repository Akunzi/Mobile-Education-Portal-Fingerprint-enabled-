import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { Exam } from '../../models/exam';

@IonicPage()
@Component({
  selector: 'page-eexampq2',
  templateUrl: 'eexampq2.html',
})
export class Eexampq2Page {

  examData: FirebaseObjectObservable<Exam>    
  exam = {} as Exam;  
 
  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }   
 
  uploadexam() {     
    this.afAuth.authState.take(1000).subscribe(auth => {   
      this.afDatabase.object(`exam/${auth.uid}`).set(this.exam)    
        .then(() => this.navCtrl.push("Eexampq3Page"));                   
    })      
  }     

} 
