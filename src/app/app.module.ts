import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LogInPage } from '../pages/log-in/log-in';
import { RegisterPage } from '../pages/register/register';
import { CalendarPage } from '../pages/calendar/calendar';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { SeasonsPage } from '../pages/seasons/seasons';
import { SeasonProfilePage } from '../pages/season-profile/season-profile';
import { AnimeProfilePage } from '../pages/anime-profile/anime-profile';
import { FavsPage } from '../pages/favs/favs';
import { NewsPage } from '../pages/news/news';
import { NewsProfilePage} from '../pages/news-profile/news-profile';
import { SettingsPage } from '../pages/settings/settings';

import { idService } from '../providers/idService/idService';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LogInPage,
    RegisterPage,
    CalendarPage,
    AboutPage,
    ProfilePage,
    SeasonsPage,
    SeasonProfilePage,
    AnimeProfilePage,
    FavsPage,
    NewsPage,
    NewsProfilePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LogInPage,
    RegisterPage,
    CalendarPage,
    AboutPage,
    ProfilePage,
    SeasonsPage,
    SeasonProfilePage,
    AnimeProfilePage,
    FavsPage,
    NewsPage,
    NewsProfilePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    idService
  ]
})
export class AppModule {}
