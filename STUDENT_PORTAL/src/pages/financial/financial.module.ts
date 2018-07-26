import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancialPage } from './financial';

@NgModule({
  declarations: [
    FinancialPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancialPage),
  ],
})
export class FinancialPageModule {}
