import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeasonProfilePage } from './season-profile';

@NgModule({
  declarations: [
    SeasonProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SeasonProfilePage),
  ],
})
export class SeasonProfilePageModule {}
