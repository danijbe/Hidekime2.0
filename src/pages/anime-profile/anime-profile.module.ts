import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimeProfilePage } from './anime-profile';

@NgModule({
  declarations: [
    AnimeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AnimeProfilePage),
  ],
})
export class AnimeProfilePageModule {}
