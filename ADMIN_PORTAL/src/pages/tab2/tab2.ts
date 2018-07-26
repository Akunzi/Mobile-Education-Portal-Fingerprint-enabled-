import { Component , ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular'; 

declare var google:any; 

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {  

  @ViewChild('map') mapRef:ElementRef; 

gaming: string = "n64";
gender: string = "f";
os: string;
music: string;  
month: string;
year: number;

musicAlertOpts: { title: string, subTitle: string };

constructor() {    
    this.musicAlertOpts = {
    title: '1994 Music',
    subTitle: 'Select your favorite' 
  }; 
}   

ionViewDidLoad(){
  this.DisplayMap();   
}  

DisplayMap(){ 
  
        const location = new google.maps.LatLng('6.671823','3.158125'); 
           
        const options = {
          center:location,
          zoom:10,
          streetViewControl:true,
          mapTypedId:'roadmap'      
        };  
  
        const map = new google.maps.Map(this.mapRef.nativeElement,options);
      
         this.addMarker(location,map);
      } 
  
       addMarker(position,map){
          return new google.maps.Marker({
            position,
            map
          }); 
       }

       stpSelect() {
        console.log('STP selected');   
      }
  }    