import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular'; 
import { AngularFireAuth } from 'angularfire2/auth';  
import { ProfilePage } from "../profile/profile";   
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { Login2Page } from '../login2/login2';

@IonicPage()   
@Component({
  selector: 'page-login',     
  templateUrl: 'login.html',  
})
export class LoginPage { 

  @ViewChild('username') user1;  
  @ViewChild('password') password; 
  user = {} as User; 
 
  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, private fire: AngularFireAuth, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) { 
  } 

  alert(message: string){    
    this.alertCtrl.create({ 
      title: 'Info',
      subTitle: message,  
      buttons: ['OK']
    }).present(); 
 }   

   async login(user: User){
     try {
       const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
       if (result) {
         this.navCtrl.setRoot('Tab1Page');    
       }
      } 
     catch (e) {
       console.error(e);  
     } 
    }

    loggedin() {      
      //this.fire.auth.sendPasswordResetEmail() 
      this.fire.auth.signInWithEmailAndPassword(this.user1.value, this.password.value) 
      .then( data => { 
        console.log('got some data', this.fire.auth.currentUser);  
        this.alert('Success! You\'re logged in'); 
        //this.navCtrl.setRoot( LoggedinPage );
        this.navCtrl.setRoot( ProfilePage );      
        // user is logged in   
      }) 
      .catch( error => {     
          console.log('got an error', error); 
          this.alert(error.message); 
      })
      console.log('Would sign in with', this.user1.value, this.password.value); 
   }
 

    register(){

      this.navCtrl.push('RegisterPage');      

    }

    doLogin() { 
      this.navCtrl.setRoot('MenuPage');     
    }   
    
    presentLoading() { 
      this.loadingCtrl.create({
        content: 'Please wait...', 
        duration: 3000, 
        dismissOnPageChange: true 
      }).present(); 
      
    }
  
} 