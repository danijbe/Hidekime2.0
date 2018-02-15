import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

/*export interface PageInterface {
  title: string;
  component: any;
  icon: string;
}*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  /*pageList: PageInterface[] = [
    { title: 'Calendario', component: CalendarPage, icon: 'calendar' },
    { title: 'Temporadas', component: SeasonsPage, icon: 'book' },
    { title: 'Favoritos', component: FavsPage, icon: 'star' },
    { title: 'Noticias', component: NewsPage, icon: 'bookmarks' },
    { title: 'Perfil', component: ProfilePage, icon: 'person' },
    { title: 'Acerca de', component: AboutPage, icon: 'people' }
  ];*/

  rootPage: any = LogInPage;
  activePage: any;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Calendario', component: CalendarPage, icon: 'calendar' },
      { title: 'Temporadas', component: SeasonsPage, icon: 'book' },
      { title: 'Favoritos', component: FavsPage, icon: 'star' },
      { title: 'Noticias', component: NewsPage, icon: 'bookmarks' },
      { title: 'Perfil', component: ProfilePage, icon: 'person' },
      { title: 'Acerca de', component: AboutPage, icon: 'people' }
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
