import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { idService } from '../../providers/idService/idService';
import { DatabaseProvider } from '../../providers/database/database';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	id: number;
	nombre: string;
	contrasenia: string;
	user: boolean = false;
	pass: boolean = false;
	newPass: string;
	newUsername: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public idService: idService,private database: DatabaseProvider) {
  	this.database.getUsuario(this.idService.usuID).then((data) => {
  		for(let i in data){
  			this.nombre = data[i].nombre;
  		}
  		this.id = this.idService.usuID;
  	}, (error) => {
  		console.log(error);
  	})
  }

  showUser(){
  	this.user = true;
  	this.pass = false;
  	this.newPass = null;
  }

  showPass(){
  	this.user = false;
  	this.pass = true;
  	this.newUsername = null;
  }
  update(){
  	//console.log(this.newUsername+", la contra: "+this.newPass+", la id es: "+this.id);
  	if(this.newUsername != null || this.newUsername != undefined){
  		this.database.updateUsername(this.id,this.newUsername).then((data) => {
  			for(let i in data){
				this.nombre = data[i].nombre;
				let alert = this.alertCtrl.create({
		      		title: 'Cambio de nombre',
		      		subTitle: 'Tu nombre de usuario ha sido cambiado por: '+this.newUsername,
		      		buttons: ['OK']
		    	});
		    	alert.present();
  			}
  		}, (error) => {
  			console.log(error);
  		})
  	}else if(this.newPass != null || this.newPass != undefined){
  		
  		this.database.updatePassword(this.id,this.newPass).then((data) => {
  			for(let i in data){
				let alert = this.alertCtrl.create({
			      title: 'Cambio de password',
			      subTitle: 'Tu password ha sido cambiada por: '+this.newPass,
			      buttons: ['OK']
		    	});
		    	alert.present();
  			}
  		}, (error) => {
  			console.log(error);
  		})
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
