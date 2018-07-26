import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth'; 
 
 
@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html', 
})
export class EditprofilePage {
  

  profileData: FirebaseObjectObservable<Profile> 
  profile = {} as Profile;  

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
      
      createProfile() {  
        this.afAuth.authState.take(1).subscribe(auth => { 
          this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)   
            .then(() => this.navCtrl.setRoot('Tab1Page'));              
        })    
    }   
}   