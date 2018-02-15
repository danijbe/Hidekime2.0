import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsProfilePage } from './news-profile';

@NgModule({
  declarations: [
    NewsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsProfilePage),
  ],
})
export class NewsProfilePageModule {}
