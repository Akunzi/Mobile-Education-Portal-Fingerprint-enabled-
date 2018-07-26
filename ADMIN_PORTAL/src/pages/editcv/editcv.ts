import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SessionProvider } from '../../providers/session/session'; 

@IonicPage() 
@Component({
  selector: 'page-editcv',
  templateUrl: 'editcv.html',
})
export class EditcvPage {

  form: FormGroup;
 
  constructor(public navCtrl: NavController, private fb: FormBuilder,
    public navParams: NavParams, private sp: SessionProvider) { 
  
   this.form = fb.group({
    name: [''],
    university: [''], 
    program: [''],
    email: [''],
    core: [''],
    minor: [''],
    personalprj: [''],
    schoolprj: [''],
    workexp: [''],
    volunteerexp: [''], 
    reference: ['']     
   });   

     const data = navParams.get('item'); 

     this.form.patchValue(data);   
     
 }   
    
 ionViewDidLoad() { 
  console.log('ionViewDidLoad EditcvPage'); 
}

  save(){ 
    this.sp.post(this.form.value, this.navCtrl); 
  }   
}      