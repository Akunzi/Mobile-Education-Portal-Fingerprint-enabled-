import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';  
import { AngularFireAuth } from 'angularfire2/auth'; 
import { AngularFireDatabase } from 'angularfire2/database-deprecated';  
import { Profile } from '../../models/profile';
import { User } from '../../models/user'; 


@IonicPage()    
@Component({ 
  selector: 'page-register', 
  templateUrl: 'register.html',   
})
export class RegisterPage { 

  @ViewChild('username') user1; 
  @ViewChild('password') password;
  
  user = {} as User;     
  profile = {} as Profile; 
 
  constructor(private afAuth: AngularFireAuth, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) { 
  } 

  alert(message: string){   
    this.alertCtrl.create({ 
      title: 'Info',
      subTitle: message, 
      buttons: ['OK']
    }).present(); 
 }     
       
    async register(user: User){ 
      try {
       const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
       console.log(result);
      }
      catch (e) {
        console.error(e);    
      }
    }
             
    registered(){ 
      this.fire.auth.createUserWithEmailAndPassword(this.user1.value, this.password.value) 
    .then(data => {
      console.log('got data', data);  
      this.alert('Registered!'); 
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message); 
    }); 
    console.log('Would register user with ', this.user1.value, this.password.value); 
    }
    createProfile() {  
      this.afAuth.authState.take(1).subscribe(auth => { 
        this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)      
          .then(() => this.navCtrl.setRoot('Tab1Page'));               
      })       
  }   
  
}          