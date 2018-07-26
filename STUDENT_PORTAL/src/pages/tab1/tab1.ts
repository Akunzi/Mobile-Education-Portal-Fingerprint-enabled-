import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated'; 
import { Profile } from '../../models/profile';    


@IonicPage()
@Component({      
  selector: 'page-tab1',  
  templateUrl: 'tab1.html',
})  
export class Tab1Page { 

  profileData: FirebaseObjectObservable<Profile>   
  

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }   
    
      ionViewWillLoad() { 
        this.afAuth.authState.subscribe(data => { 
          if (data && data.email && data.uid) {  
          this.toast.create({
            message: `Welcome to Student Portal, ${data.email}`,   
            duration: 3000
          }).present();   

          this.profileData = this.afDatabase.object(`profile/${data.uid}`)   

        }
        else {
          this.toast.create({
            message: `Could not find Authentication details`,  
            duration: 3000
          }).present(); 
        }
        }); 
      }     
 
      cv() { 
        this.navCtrl.push('CvPage');               
           }  
           
           port(){
            this.navCtrl.setRoot('ViewPage');    
           }

}   