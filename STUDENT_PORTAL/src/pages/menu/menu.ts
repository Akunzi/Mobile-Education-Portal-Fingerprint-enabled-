import { Component, ViewChild } from '@angular/core';  
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';  

export interface PageInterface{ 
  title: string;
  pageName:string;
  tabComponent?: any;   
  index?: number;  
  icon: string;  
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav; 
  
  pages: PageInterface[] = [
    {title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home'},
    {title: 'Finance', pageName: 'FinancialPage', icon: 'calculator'},
    {title: 'Courses', pageName: 'CoursesPage', icon: 'book'},       
    {title: 'Grading', pageName: 'SpecialPage', icon: 'checkmark-circle'}, 
    {title: 'E-exam',  pageName: 'EexamPage', icon: 'wifi'},     
    {title: 'Contacts', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts'},
    {title: 'Settings', pageName: 'SettingsPage', icon: 'settings'},   
    {title: 'Logout', pageName: 'LogoutPage', icon: 'lock'}          
  ]  
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {   
  }  
 
 openPage(page: PageInterface){     
   let params = {};
   
   if (page.index) {
     params= { tabIndex: page.index}; 
   } 

   if (this.nav.getActiveChildNav() && page.index != undefined) { 
       this.nav.getActiveChildNav().select(page.index);
   } else {
     this.nav.setRoot(page.pageName, params);
   } 
 }
 
 isActive(page: PageInterface){
   let childNav = this.nav.getActiveChildNav();

   if (childNav) {
     if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
       return 'primary';
     }
      return; 
   } 
   if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
     return 'primary';
   }
 }

} 
