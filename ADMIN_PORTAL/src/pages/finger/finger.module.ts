import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FingerPage } from './finger';

@NgModule({
  declarations: [
    FingerPage,
  ],
  imports: [
    IonicPageModule.forChild(FingerPage),
  ],
})
export class FingerPageModule {}
