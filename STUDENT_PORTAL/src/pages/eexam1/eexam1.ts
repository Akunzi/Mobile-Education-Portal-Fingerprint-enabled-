import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';  
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Exam } from '../../models/exam';
import { AngularFireAuth } from 'angularfire2/auth'; 

@IonicPage()
@Component({ 
  selector: 'page-eexam1',  
  templateUrl: 'eexam1.html',
}) 
export class Eexam1Page { 
   examData: FirebaseObjectObservable<Exam> 

  langs;  
  langForm;  

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({ 
      "langs": new FormControl({value: 'rust', disabled: false})
    }); 
  }

  nextpq() {
     this.navCtrl.push('Exam2Page'); 
  } 

  doSubmit(event) { 
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();  
  }


  ionViewWillLoad() {  
    this.afAuth.authState.subscribe(data => {  
      if (data && data.email && data.uid) {  
      this.toast.create({ 
        message: `Welcome to Student Portal, ${data.email}`,   
        duration: 3000
      }).present();   

      this.examData = this.afDatabase.object(`exam/${data.uid}`)     
    } 
});  
} 
} 