import { Component } from '@angular/core';
import { Platform } from 'ionic-angular'; 
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';


@Component({
  selector: 'page-finger',
  templateUrl: 'finger.html',
})
export class FingerPage {

  fingerprintOptions: FingerprintOptions

  constructor(private fingerprint: FingerprintAIO, private platform: Platform) {
     this.fingerprintOptions = {
       clientId: 'fingerprint-demo',
       clientSecret: 'password', 
       disableBackup: true 
     }
  }  

    async finger(){  
      try {  
        await this.platform.ready(); 
        const available = await this.fingerprint.isAvailable(); 
        console.log(available);    
        if(available === "OK"){   
          const result = await this.fingerprint.show(this.fingerprintOptions); 
          console.log(result); 
        } 
      }  
      catch (e) {
        console.error(e); 
      }
    }

}
