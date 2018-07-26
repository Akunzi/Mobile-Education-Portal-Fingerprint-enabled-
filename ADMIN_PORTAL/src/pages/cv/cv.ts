import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session'; 
import { Curiculumn } from '../../models/curiculumn';

@IonicPage() 
@Component({  
  selector: 'page-cv', 
  templateUrl: 'cv.html',  
}) 
export class CvPage {  
  
  item: Curiculumn = { 
    name: '',
    university: '', 
    program: '',
    email: '',
    core: '',
    minor: '',
    personalprj: '', 
    schoolprj: '',  
    workexp: '',
    volunteerexp: '',  
    reference: ''     
  }  

  constructor(public navCtrl: NavController, public navParams: NavParams, private sp: SessionProvider) {  
  }          
 
  edit(){  
    this.navCtrl.push('EditcvPage',{    
      item: this.item     
    });  
  }
 
  ionViewDidEnter(){
    const newdata = this.sp.get() as Curiculumn; 
    if (newdata !== null) {
      this.item = newdata;    
    }
  }
}          