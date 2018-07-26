import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Course } from '../../models/course';
import { AngularFireAuth } from 'angularfire2/auth';
import { Grade } from '../../models/grade';
import { Grade1 } from '../../models/grade1';

@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {  

  courseData: FirebaseObjectObservable<Course> 
  gradeData: FirebaseObjectObservable<Grade> 
  grade1Data: FirebaseObjectObservable<Grade1>    

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  } 

  ionViewWillLoad() {   
    this.afAuth.authState.subscribe(data => { 
      if (data && data.email && data.uid) {  
      this.toast.create({
        message: `Welcome to Student Portal, ${data.email}`,    
        duration: 3000 
      }).present();   

      this.courseData = this.afDatabase.object(`course/${data.uid}`)    
      this.gradeData = this.afDatabase.object(`grade/${data.uid}`)  
    }
    else {
      this.toast.create({ 
        message: `Could not find Authentication details`,     
        duration: 3000 
      }).present();  
    }
    });  
  }   

 
} 
