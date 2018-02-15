import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { anime } from '../../models/anime';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;
  private mensaje: string;
  private id: number;

  //temporadas: anime[] = [];
  constructor(
    public http: Http,
    public storage: SQLite
  ) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "dato.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        /*db.executeSql("DROP TABLE usuario",[]);
        db.executeSql("DROP TABLE anime",[]);
        db.executeSql("DROP TABLE temporada",[]);
        db.executeSql("DROP TABLE noticia",[]);
        db.executeSql("DROP TABLE genero",[]);
        db.executeSql("DROP TABLE anime_genero",[]);
        db.executeSql("DROP TABLE favorito",[]);*/

        db.executeSql("CREATE TABLE IF NOT EXISTS temporada (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre text)",[]);
        db.executeSql("CREATE TABLE IF NOT EXISTS anime_genero(id_genero INTEGER, id_anime INTEGER)",[]);
        db.executeSql("CREATE TABLE IF NOT EXISTS favorito(id_usuario INTEGER, id_anime INTEGER)",[]);
        db.executeSql("CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre text, contrasenia text,"
          +"FOREIGN KEY(id) REFERENCES favorito(id_usuario))",[]);
        db.executeSql("CREATE TABLE IF NOT EXISTS anime (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo text, descripcion text,"
          +"episodios number, imagen text, fecha DATE, id_temporada INTEGER, FOREIGN KEY(id)"
          +" REFERENCES anime_genero(id_anime), FOREIGN KEY(id_temporada) REFERENCES temporada(id), FOREIGN KEY(id)"
          +"REFERENCES favorito(id_anime))",[]);
        db.executeSql("CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo text, descripcion text, imagen text)",[]);
        db.executeSql("CREATE TABLE IF NOT EXISTS genero(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre text, "
          +"FOREIGN KEY(id) REFERENCES anime_genero(id_genero))",[]);
        
        /*let temp1 = "INSERT INTO temporada(nombre) VALUES('Invierno - 2018')";
        let temp2 = "INSERT INTO temporada(nombre) VALUES('Verano - 2018')";
        let temp3 = "INSERT INTO temporada(nombre) VALUES('Otoño - 2018')";
        let temp4 = "INSERT INTO temporada(nombre) VALUES('Primavera - 2018')";
        this.db.executeSql(temp1,[]);
        this.db.executeSql(temp2,[]);
        this.db.executeSql(temp3,[]);
        this.db.executeSql(temp4,[]);

        let fav = "INSERT INTO favorito(id_usuario,id_anime) VALUES(1,1)";
        this.db.executeSql(fav,[]);

        let animeGen = "INSERT INTO anime_genero(id_genero,id_anime) VALUES(1,1)";
        this.db.executeSql(animeGen,[]);

        let usu = "INSERT INTO usuario(nombre,contrasenia) VALUES('admin',1234)";
        this.db.executeSql(usu,[]);

        let genero1 = "INSERT INTO genero(nombre) VAlUES('Aventura')";
        let genero2 = "INSERT INTO genero(nombre) VAlUES('Drama')";
        let genero3 = "INSERT INTO genero(nombre) VAlUES('Accion')";
        let genero5 = "INSERT INTO genero(nombre) VAlUES('Fantasia')";
        let genero6 = "INSERT INTO genero(nombre) VAlUES('Comedia')";
        this.db.executeSql(genero1,[]);
        this.db.executeSql(genero2,[]);
        this.db.executeSql(genero3,[]);
        this.db.executeSql(genero5,[]);
        this.db.executeSql(genero6,[]);

        let noticia1 = "INSERT INTO noticia(titulo,descripcion,imagen) VALUES('Tokyo ghoul retrasa 3a temporada','como se conoce desde hace poco el famoso anime toko ghoul retrasara la emision de su tercera temporada 2 meses, que contara con 24 episodios','assets/imgs/tokyo.png')";
        let noticia2 = "INSERT INTO noticia(titulo,descripcion,imagen) VALUES('Terminamos la app','El grupo de nani, chistian y red terminan el proyecto de IONIC','assets/imgs/ionnic.png')";
        this.db.executeSql(noticia1,[]);
        this.db.executeSql(noticia2,[]);

        let anime1 = "INSERT INTO anime(titulo,descripcion,episodios,fecha,imagen,id_temporada) VALUES('Energy','Un alegre joven se decide a hacer las practicas en enerySystem, una alegre empresa donde conocera gente interesante y caminara 5 horas todos los dias para llegar al curro',12,'2018-02-16','assets/imgs/nani.png',1)";
        let anime2 = "INSERT INTO anime(titulo,descripcion,episodios,fecha,imagen,id_temporada) VALUES('Virtuality','Jose es un adicto a Star wars, muy pronto se vera inmerso en dicho universo a traves de un juego de movil que se descargo y del cual sera su personaje principal',24,'2018-02-15','assets/imgs/jose.png',2)";
        let anime3 = "INSERT INTO anime(titulo,descripcion,episodios,fecha,imagen,id_temporada) VALUES('Ninja turtles','Cuenta la historia de como 5 informaticos crearon la empresa bitUp hoy lider numero uno en el sector de la seguridad',13,'2018-02-14','assets/imgs/ninjas.png',3)";
        let anime4 = "INSERT INTO anime(titulo,descripcion,episodios,fecha,imagen,id_temporada) VALUES('Chistians life','Un dia decide matar a platos a toda su clase de FEMPA, el tema es que la policia no llega a pillar a este delincuente, por lo que debera huir para salvar su vida',13,'2018-02-17','assets/imgs/chistian.png',1)";
        let anime5 = "INSERT INTO anime(titulo,descripcion,episodios,fecha,imagen,id_temporada) VALUES('The car','Franco es un chico normal, con su vida normal, pronto toda su vida comenzara a derrumbarse cuando resulte mortalmente herido de un accidente de coche que cambiara su vida para siempre',25,'2018-02-17','assets/imgs/franco.png',2)";
        let anime6 = "INSERT INTO anime(titulo,descripcion,episodios,fecha,imagen,id_temporada) VALUES('La rueda','De camino a FEMPA Salva tiene un accidente y se le pincha la rueda, ya que no sabe arreglarla no podra ir a FEMPA y eso le costara un examen que decidira su curso',14,'2018-02-18','assets/imgs/salva.png',2)";
        this.db.executeSql(anime1,[]);
        this.db.executeSql(anime2,[]);
        this.db.executeSql(anime3,[]);
        this.db.executeSql(anime4,[]);
        this.db.executeSql(anime5,[]);
        this.db.executeSql(anime6,[]);*/

        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  buscarUsu(nombre:string){
    let insert = "INSERT INTO usuario(nombre,contrasenia) VALUES('pablo',1234)";
    this.db.executeSql(insert,[]);
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM usuario WHERE nombre=?",[nombre]).then((data) => {
        let idMensaje = [];
        if(data.rows.length < 1){
          idMensaje.push({
            id: 0,
            mensaje: "el usuario no existe"
          });
        }else{
          for (var i = 0; i < data.rows.length; i++) {
            idMensaje.push({
              id: data.rows.item(i).id,
              mensaje: "contraseña incorrecta"
            })
          }
        }
        resolve(idMensaje);
      }, (error) => {
        reject(error);
      })
    })
  }

  logearse(id:number,contrasenia:string){
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM usuario WHERE contrasenia=? AND id=?",[contrasenia,id]).then((data) => {
        let idMensaje = [];
        if(data.rows.length > 0){
          idMensaje.push({
            id: id,
            mensaje: "ok"
          });
        }else{
          idMensaje.push({
            id: 0,
            mensaje: "contraseña incorrecta"
          });
        }
        resolve(idMensaje);
      }, (error) => {
        reject(error);
      })
    })
  }



  getAnimes(){
     /*return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT a.titulo,a.imagen,a.id as idAnime,t.nombre,a.id_temporada,t.id FROM anime a INNER JOIN temporada t ON a.id_temporada=t.id GROUP BY a.titulo,a.imagen,a.id,t.nombre,a.id_temporada,t.id", []).then((data) => {
        let animes = [];
        console.log(data);
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            animes.push({
              titulo: data.rows.item(i).titulo,
              imagen: data.rows.item(i).imagen,
              id: data.rows.item(i).idAnime,
              nombre: data.rows.item(i).nombre
            });           
          }          
        }
        resolve(animes);
      }, (error) => {
        reject(error);
      })
    })*/
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT id,nombre FROM temporada", []).then((data) => {
        let temporadas = [];
        for (var i = 0; i < data.rows.length; i++) {
          let name = data.rows.item(i).nombre;
          console.log(name);
          this.db.executeSql("SELECT * FROM anime WHERE id_temporada=?",[data.rows.item(i).id]).then((data2) => {
            let anime = [];
            if(data2.rows.length > 0){
              for(var j=0;j<data2.rows.length;j++){
                anime.push({
                  titulo: data2.rows.item(j).titulo,
                  imagen: data2.rows.item(j).imagen,
                  id: data2.rows.item(j).id
                })
              }
              temporadas.push({
                  nombre: name,
                  anime: anime
              }) 
            }
          })          
        }          
        resolve(temporadas);
      }, (error) => {
        reject(error);
      })
    })
  }
 }
