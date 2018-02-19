import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { LogInPage } from '../log-in/log-in';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	username: string;
	password: string;
	repass: string;
	respuesta: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController, private database: DatabaseProvider) {
  }

  register(){
  	if(this.username != null && this.password != null && this.repass != null){
  		if(this.password == this.repass){
		  	this.database.registrar(this.username,this.password).then((data) => {
		  		for(let i in data){
		  			if(data[i].mensaje == "ok"){
		  				this.navCtrl.setRoot(LogInPage);
		  			}else{
		  				this.username = "";
		        		this.password = "";
		        		this.repass = "";
		  				this.respuesta = data[i].mensaje
		  			}
		  		}
		  	})
		}else{
			this.respuesta = "Las contraseñas deben ser iguales";
		}
	}else{
		this.respuesta = "Debes rellenar todos los campos";
	}
  }

  logear(){
  	this.navCtrl.setRoot(LogInPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
