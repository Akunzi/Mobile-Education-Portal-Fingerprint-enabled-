import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Course } from '../../models/course';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  courseData: FirebaseObjectObservable<Course>  
  course = {} as Course;  

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

    }
    else {
      this.toast.create({
        message: `Could not find Authentication details`,    
        duration: 3000
      }).present();  
    }
    }); 
  }   
  
  add() {    
    this.afAuth.authState.take(1000).subscribe(data => {  
      this.afDatabase.object(`course/${data.uid}`).set(this.course)     
        .then(() => this.navCtrl.pop());                  
    })    
}   
 
}  
