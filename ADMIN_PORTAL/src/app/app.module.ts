import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth'; 
import { MyApp } from './app.component'; 
import { LoginPage } from '../pages/login/login'; 
 
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';     
import { AngularFireAuthModule } from 'angularfire2/auth';    
import { AngularFireModule } from 'angularfire2';  
import { StatusBar } from '@ionic-native/status-bar'; 
import { SplashScreen } from '@ionic-native/splash-screen';  
import { FIREBASE_CONFIG } from "./app.firebase.config";   
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SessionProvider } from '../providers/session/session';    


@NgModule({   
  declarations: [   
    MyApp,   
    LoginPage      
    
  ],  
  imports: [    
    BrowserModule,    
    AngularFireAuthModule, 
    AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),  
    HttpModule,  
    //AndroidFingerprintAuth,   
     
    HttpClientModule,    
    IonicModule.forRoot(MyApp) 
      
  ],  
  bootstrap: [IonicApp],     
  entryComponents: [   
    MyApp,    
    LoginPage
  ], 
  providers: [  

    StatusBar,   
    SplashScreen, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SessionProvider,
    FingerprintAIO 
  ]
})
export class AppModule {}
