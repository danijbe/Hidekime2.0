import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { anime } from '../../models/anime';
import { AnimeProfilePage } from '../anime-profile/anime-profile';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
	animes: anime[] = [];
  datosTemporada: any;
  bDatos: boolean = false;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {
  	this.database.getAnimes().then((data) => {
      console.log(data);
      this.datosTemporada = data;
      this.bDatos = true;
      /*for(let i in data){
        console.log(data[i].anime);
      }*/
    	/*for(let i in data){
        console.log(data[i].anime);
	        //let a = new anime(data[i].titulo,data[i].imagen,data[i].id,data[i].nombre);
          //console.log(a);
          //this.animes.push(a);
          this.animes = data[i].anime;
          for(let a in this.animes){
            console.log(this.animes[a].titulo+" sds "+this.animes[a].imagen+" sds "+this.animes[a].id);
          }
	      }*/
      }, (error) => {
        console.log(error);
      })
  }

  detalle(id: number){
    this.navCtrl.push(AnimeProfilePage, {
      id: id
    })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }
}
