import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { SeasonsPage } from '../seasons/seasons';
import { RegisterPage } from '../register/register';
import { MenuController } from 'ionic-angular';
import { idService } from '../../providers/idService/idService';
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
	username: string;
	password: string;
  id: number;
  mensaje: string;
  respuesta: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public idService: idService,private database: DatabaseProvider, public menu: MenuController) {
    this.menu.swipeEnable(false);
  }

  loguin(){
    if(this.username != null && this.password != null){
      this.database.buscarUsu(this.username).then((data) => {
        for(let i in data){
          this.id = data[i].id;
          this.mensaje = data[i].mensaje;  
        }
        if(this.id > 0){
          this.database.logearse(this.id,this.password).then((data) => {
            for(let i in data){
              if(data[i].mensaje == "ok"){
                this.idService.usuID = this.id;
                this.navCtrl.setRoot(SeasonsPage);
              }else{
                this.password = "";
                this.respuesta = this.mensaje;
              }
            }
          }) 
        }else{
          this.username = "";
          this.password = "";
          this.respuesta = this.mensaje;
        }
      })
    }else{
      this.respuesta = "Debes rellenar todos los campos";
    }
  }

  registro(){
    this.navCtrl.setRoot(RegisterPage);
  }

  /*getUsers(){
  	this.database.getAnimes().then((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

}
