import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { anime } from '../../models/anime';
/**
 * Generated class for the AnimeProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anime-profile',
  templateUrl: 'anime-profile.html',
})
export class AnimeProfilePage {
	titulo: string;
	descripcion: string;
	imagen: string;
	episodios: string;
	fecha: string;
	espera: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: DatabaseProvider) {
  	this.database.getAnime(this.navParams.get('id')).then((data) => {
  		for(let i in data){
  			this.titulo = data[i].titulo;
  			this.descripcion = data[i].descripcion;
  			this.imagen = data[i].imagen;
  			this.episodios = data[i].episodios;
  			this.fecha = data[i].fecha;
  		}
  		this.espera = true;
  		console.log(data);
  	}, (error) => {
  		console.log(error);
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimeProfilePage');
  }

}
