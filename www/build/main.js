webpackJsonp([12],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre nosotros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div style="text-align: center;padding-bottom:60px;padding-top:40px">\n	 	<ion-img width="150px" height="150px" src="assets/imgs/icono.png" style="background-color: #FFFFFF;align:center">	\n		</ion-img>\n	</div>\n	<div style="text-align:center">\n		Esta app tiene como objetivo la gestion de las temporadas y sus correspondientes animes.\n		El usuario podra ver y seleccionar los animes que quiera asi como poder ver informacion relativa acerca del anime/temporada en cuestion. \n	</div>\n	<div style="margin-top:2%;text-align:center">\n		Esta app esta hecha por una empresa anonima cuyos integrantes son:\n		<ion-list>\n			<ion-item>Daniel Juan bevia</ion-item>\n			<ion-item>Chistian</ion-item>\n			<ion-item>Pablo Diaz Gonzalez</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anime_profile_anime_profile__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = (function () {
    function CalendarPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.animes = [];
        this.bDatos = false;
        this.database.getAnimes().then(function (data) {
            console.log(data);
            _this.datosTemporada = data;
            _this.bDatos = true;
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
        }, function (error) {
            console.log(error);
        });
    }
    CalendarPage.prototype.detalle = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__anime_profile_anime_profile__["a" /* AnimeProfilePage */], {
            id: id
        });
    };
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\calendar\calendar.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Calendario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavsPage = (function () {
    function FavsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavsPage');
    };
    FavsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favs',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\favs\favs.html"*/'<!--\n  Generated template for the FavsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>favs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\favs\favs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FavsPage);
    return FavsPage;
}());

//# sourceMappingURL=favs.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_in_log_in__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.username != null && this.password != null && this.repass != null) {
            if (this.password == this.repass) {
                this.database.registrar(this.username, this.password).then(function (data) {
                    for (var i in data) {
                        if (data[i].mensaje == "ok") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__log_in_log_in__["a" /* LogInPage */]);
                        }
                        else {
                            _this.username = "";
                            _this.password = "";
                            _this.repass = "";
                            _this.respuesta = data[i].mensaje;
                        }
                    }
                });
            }
            else {
                this.respuesta = "Las contraseñas deben ser iguales";
            }
        }
        else {
            this.respuesta = "Debes rellenar todos los campos";
        }
    };
    RegisterPage.prototype.logear = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__log_in_log_in__["a" /* LogInPage */]);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\register\register.html"*/'<ion-header>\n</ion-header>\n \n<ion-content padding style="background-color:#FFFFFF;">\n 	<form (ngSubmit)="register()">\n 		<div style="text-align: center;padding-bottom:40px;padding-top:40px">\n	 		<ion-img width="120px" height="120px" src="assets/imgs/icono.png" style="background-color: #FFFFFF;text-align:center">\n			</ion-img>\n		</div>\n		 <ion-item>\n			 <ion-label floating>Username</ion-label>\n			 <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n		 </ion-item>\n		 \n		 <ion-item>\n			 <ion-label floating>Password</ion-label>\n			 <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n		 </ion-item>\n		 \n		 <ion-item>\n		   <ion-label floating>Re-Password</ion-label>\n		   <ion-input type="password" [(ngModel)]="repass" name="repass"></ion-input>\n		 </ion-item>\n\n	   <button ion-button block style="margin-top:10%" type="submit" color="danger" round>Sign In</button>\n	   <ion-input type="text" name="respuesta" [disabled]="true" [(ngModel)]="respuesta" style="color:red"></ion-input>\n	</form>\n	<div style="text-align:center;margin-top:-10%">\n 	<p>¿Tienes cuenta?</p>\n 	<a (click)="logear()">¡Inicia sesion!</a>\n </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\news\news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>news</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_idService_idService__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, idService, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.idService = idService;
        this.database = database;
        this.user = false;
        this.pass = false;
        this.database.getUsuario(this.idService.usuID).then(function (data) {
            for (var i in data) {
                _this.nombre = data[i].nombre;
            }
            _this.id = _this.idService.usuID;
        }, function (error) {
            console.log(error);
        });
    }
    ProfilePage.prototype.showUser = function () {
        this.user = true;
        this.pass = false;
        this.newPass = "";
    };
    ProfilePage.prototype.showPass = function () {
        this.user = false;
        this.pass = true;
        this.newUsername = "";
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        if (this.newUsername != null) {
            this.database.updateUsername(this.id, this.newUsername).then(function (data) {
                for (var i in data) {
                    _this.nombre = data[i].nombre;
                }
            });
        }
        else if (this.newPass != null) {
            this.database.updatePassword(this.id, this.newUsername).then(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div style="text-align: center;margin-bottom:50%">\n	 	<ion-img src="assets/imgs/default.png" style="background-color: #FFFFFF;text-align:center;width: 80%;height:80%;padding:10%">\n		</ion-img>\n	</div>\n	<form (ngSubmit)="update()">\n		<button ion-item (click)="showUser()" style="background-color:#B0A6A4">Cambia nombre de usuario\n		<ion-icon name="ios-arrow-forward" item-right></ion-icon></button>\n		<ion-item *ngIf="user">\n			<ion-label floating>Escribe nuevo nombre</ion-label>\n			<ion-input type="text" [(ngModel)]="newUsername" name="newUsername"></ion-input>\n		</ion-item>\n		<button ion-item (click)="showPass()" style="background-color:#B0A6A4">Cambia contraseña\n		<ion-icon name="ios-arrow-forward" item-right></ion-icon></button>\n		<ion-item *ngIf="pass">\n			<ion-label floating>Escribe nueva contraseña</ion-label>\n			<ion-input type="text" [(ngModel)]="newPass" name="newPass"></ion-input>\n		</ion-item>\n		<div style="text-align:center">\n			<button ion-button type="submit" round color="danger" full>Update</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_idService_idService__["a" /* idService */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		287,
		11
	],
	"../pages/anime-profile/anime-profile.module": [
		288,
		10
	],
	"../pages/calendar/calendar.module": [
		289,
		9
	],
	"../pages/favs/favs.module": [
		290,
		8
	],
	"../pages/log-in/log-in.module": [
		291,
		7
	],
	"../pages/news-profile/news-profile.module": [
		292,
		6
	],
	"../pages/news/news.module": [
		293,
		5
	],
	"../pages/profile/profile.module": [
		294,
		4
	],
	"../pages/register/register.module": [
		295,
		3
	],
	"../pages/season-profile/season-profile.module": [
		296,
		2
	],
	"../pages/seasons/seasons.module": [
		297,
		1
	],
	"../pages/settings/settings.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewsProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsProfilePage = (function () {
    function NewsProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsProfilePage');
    };
    NewsProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-profile',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\news-profile\news-profile.html"*/'<!--\n  Generated template for the NewsProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>news-profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\news-profile\news-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NewsProfilePage);
    return NewsProfilePage;
}());

//# sourceMappingURL=news-profile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SeasonProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeasonProfilePage = (function () {
    function SeasonProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SeasonProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeasonProfilePage');
    };
    SeasonProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-season-profile',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\season-profile\season-profile.html"*/'<!--\n  Generated template for the SeasonProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>season-profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\season-profile\season-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SeasonProfilePage);
    return SeasonProfilePage;
}());

//# sourceMappingURL=season-profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_seasons_seasons__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_season_profile_season_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_anime_profile_anime_profile__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favs_favs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_news_news__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_news_profile_news_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_idService_idService__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_sqlite__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_seasons_seasons__["a" /* SeasonsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_season_profile_season_profile__["a" /* SeasonProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_anime_profile_anime_profile__["a" /* AnimeProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favs_favs__["a" /* FavsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_news_profile_news_profile__["a" /* NewsProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anime-profile/anime-profile.module#AnimeProfilePageModule', name: 'AnimeProfilePage', segment: 'anime-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favs/favs.module#FavsPageModule', name: 'FavsPage', segment: 'favs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-in/log-in.module#LogInPageModule', name: 'LogInPage', segment: 'log-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-profile/news-profile.module#NewsProfilePageModule', name: 'NewsProfilePage', segment: 'news-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/season-profile/season-profile.module#SeasonProfilePageModule', name: 'SeasonProfilePage', segment: 'season-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seasons/seasons.module#SeasonsPageModule', name: 'SeasonsPage', segment: 'seasons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_seasons_seasons__["a" /* SeasonsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_season_profile_season_profile__["a" /* SeasonProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_anime_profile_anime_profile__["a" /* AnimeProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favs_favs__["a" /* FavsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_news_profile_news_profile__["a" /* NewsProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_idService_idService__["a" /* idService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_calendar_calendar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_seasons_seasons__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favs_favs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_news_news__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*export interface PageInterface {
  title: string;
  component: any;
  icon: string;
}*/
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        /*pageList: PageInterface[] = [
          { title: 'Calendario', component: CalendarPage, icon: 'calendar' },
          { title: 'Temporadas', component: SeasonsPage, icon: 'book' },
          { title: 'Favoritos', component: FavsPage, icon: 'star' },
          { title: 'Noticias', component: NewsPage, icon: 'bookmarks' },
          { title: 'Perfil', component: ProfilePage, icon: 'person' },
          { title: 'Acerca de', component: AboutPage, icon: 'people' }
        ];*/
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_log_in_log_in__["a" /* LogInPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_5__pages_calendar_calendar__["a" /* CalendarPage */], icon: 'calendar' },
            { title: 'Temporadas', component: __WEBPACK_IMPORTED_MODULE_8__pages_seasons_seasons__["a" /* SeasonsPage */], icon: 'book' },
            { title: 'Favoritos', component: __WEBPACK_IMPORTED_MODULE_9__pages_favs_favs__["a" /* FavsPage */], icon: 'star' },
            { title: 'Noticias', component: __WEBPACK_IMPORTED_MODULE_10__pages_news_news__["a" /* NewsPage */], icon: 'bookmarks' },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: 'person' },
            { title: 'Acerca de', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */], icon: 'people' }
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" [class.active-page]="checkActive(p)" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { anime } from '../../models/anime';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    //temporadas: anime[] = [];
    function DatabaseProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        if (!this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({ name: "dato.db", location: "default" }).then(function (db) {
                _this.db = db;
                /*db.executeSql("DROP TABLE usuario",[]);
                db.executeSql("DROP TABLE anime",[]);
                db.executeSql("DROP TABLE temporada",[]);
                db.executeSql("DROP TABLE noticia",[]);
                db.executeSql("DROP TABLE genero",[]);
                db.executeSql("DROP TABLE anime_genero",[]);
                db.executeSql("DROP TABLE favorito",[]);*/
                db.executeSql("CREATE TABLE IF NOT EXISTS temporada (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre text)", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS anime_genero(id_genero INTEGER, id_anime INTEGER)", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS favorito(id_usuario INTEGER, id_anime INTEGER)", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre text, contrasenia text,"
                    + "FOREIGN KEY(id) REFERENCES favorito(id_usuario))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS anime (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo text, descripcion text,"
                    + "episodios number, imagen text, fecha DATE, id_temporada INTEGER, FOREIGN KEY(id)"
                    + " REFERENCES anime_genero(id_anime), FOREIGN KEY(id_temporada) REFERENCES temporada(id), FOREIGN KEY(id)"
                    + "REFERENCES favorito(id_anime))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo text, descripcion text, imagen text)", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS genero(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre text, "
                    + "FOREIGN KEY(id) REFERENCES anime_genero(id_genero))", []);
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
                _this.isOpen = true;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    DatabaseProvider.prototype.buscarUsu = function (nombre) {
        var _this = this;
        var insert = "INSERT INTO usuario(nombre,contrasenia) VALUES('pablo',1234)";
        this.db.executeSql(insert, []);
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM usuario WHERE nombre=?", [nombre]).then(function (data) {
                var idMensaje = [];
                if (data.rows.length < 1) {
                    idMensaje.push({
                        id: 0,
                        mensaje: "el usuario no existe"
                    });
                }
                else {
                    for (var i = 0; i < data.rows.length; i++) {
                        idMensaje.push({
                            id: data.rows.item(i).id,
                            mensaje: "contraseña incorrecta"
                        });
                    }
                }
                resolve(idMensaje);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.logearse = function (id, contrasenia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM usuario WHERE contrasenia=? AND id=?", [contrasenia, id]).then(function (data) {
                var idMensaje = [];
                if (data.rows.length > 0) {
                    idMensaje.push({
                        id: id,
                        mensaje: "ok"
                    });
                }
                else {
                    idMensaje.push({
                        id: 0,
                        mensaje: "contraseña incorrecta"
                    });
                }
                resolve(idMensaje);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.registrar = function (nombre, contrasenia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("INSERT INTO usuario(nombre,contrasenia) VALUES(?,?)", [nombre, contrasenia]).then(function (data) {
                var mensaje = [];
                if (data.rows.length = 0) {
                    mensaje.push({
                        mensaje: "Ha ocurrido un error"
                    });
                }
                else {
                    mensaje.push({
                        mensaje: "ok"
                    });
                }
                resolve(mensaje);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getUsuario = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM usuario WHERE id=?", [id]).then(function (data) {
                var usuario = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        usuario.push({
                            nombre: data.rows.item(i).nombre
                        });
                    }
                }
                resolve(usuario);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.updateUsername = function (id, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("UPDATE usuario  SET nombre=? WHERE id=?", [id, user]).then(function (data) {
                var change = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        change.push({
                            nombre: user
                        });
                    }
                }
                resolve(change);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.updatePassword = function (id, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("UPDATE usuario  SET contrasenia=? WHERE id=?", [id, pass]).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getAnime = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM anime WHERE id=?", [id]).then(function (data) {
                var anime = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        anime.push({
                            titulo: data.rows.item(i).titulo,
                            imagen: data.rows.item(i).imagen,
                            descripcion: data.rows.item(i).descripcion,
                            episodios: data.rows.item(i).episodios,
                            fecha: data.rows.item(i).fecha
                        });
                    }
                }
                resolve(anime);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getAnimes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT id,nombre FROM temporada", []).then(function (data) {
                var temporadas = [];
                var _loop_1 = function () {
                    var name_1 = data.rows.item(i).nombre;
                    console.log(name_1);
                    _this.db.executeSql("SELECT * FROM anime WHERE id_temporada=?", [data.rows.item(i).id]).then(function (data2) {
                        var anime = [];
                        if (data2.rows.length > 0) {
                            for (var j = 0; j < data2.rows.length; j++) {
                                anime.push({
                                    titulo: data2.rows.item(j).titulo,
                                    imagen: data2.rows.item(j).imagen,
                                    id: data2.rows.item(j).id
                                });
                            }
                            temporadas.push({
                                nombre: name_1,
                                anime: anime
                            });
                        }
                    });
                };
                for (var i = 0; i < data.rows.length; i++) {
                    _loop_1();
                }
                resolve(temporadas);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AnimeProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnimeProfilePage = (function () {
    function AnimeProfilePage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.espera = false;
        this.database.getAnime(this.navParams.get('id')).then(function (data) {
            for (var i in data) {
                _this.titulo = data[i].titulo;
                _this.descripcion = data[i].descripcion;
                _this.imagen = data[i].imagen;
                _this.episodios = data[i].episodios;
                _this.fecha = data[i].fecha;
            }
            _this.espera = true;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    }
    AnimeProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnimeProfilePage');
    };
    AnimeProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anime-profile',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\anime-profile\anime-profile.html"*/'<!--\n  Generated template for the AnimeProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="espera">\n      <img [src]="imagen">\n      <p><b>{{titulo}}</b></p>\n      <p>{{episodios}} episodios</p>\n      <p>{{fecha}}</p>\n      <p>{{descripcion}}</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\anime-profile\anime-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], AnimeProfilePage);
    return AnimeProfilePage;
}());

//# sourceMappingURL=anime-profile.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__seasons_seasons__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_idService_idService__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogInPage = (function () {
    function LogInPage(navCtrl, navParams, idService, database, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.idService = idService;
        this.database = database;
        this.menu = menu;
        this.menu.swipeEnable(false);
    }
    LogInPage.prototype.loguin = function () {
        var _this = this;
        if (this.username != null && this.password != null) {
            this.database.buscarUsu(this.username).then(function (data) {
                for (var i in data) {
                    _this.id = data[i].id;
                    _this.mensaje = data[i].mensaje;
                }
                if (_this.id > 0) {
                    _this.database.logearse(_this.id, _this.password).then(function (data) {
                        for (var i in data) {
                            if (data[i].mensaje == "ok") {
                                _this.idService.usuID = _this.id;
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__seasons_seasons__["a" /* SeasonsPage */]);
                            }
                            else {
                                _this.password = "";
                                _this.respuesta = _this.mensaje;
                            }
                        }
                    });
                }
                else {
                    _this.username = "";
                    _this.password = "";
                    _this.respuesta = _this.mensaje;
                }
            });
        }
        else {
            this.respuesta = "Debes rellenar todos los campos";
        }
    };
    LogInPage.prototype.registro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    /*getUsers(){
      this.database.getAnimes().then((data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        })
    }*/
    LogInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogInPage');
    };
    LogInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log-in',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\log-in\log-in.html"*/'<ion-header>\n</ion-header>\n \n<ion-content padding style="background-color:#FFFFFF;">\n	<!--<form (ngSubmit)="logForm()">\n		<ion-item>\n	     <ion-label floating>Username</ion-label>\n	     <ion-input type="text"></ion-input>\n	   </ion-item>\n	   <ion-item>\n		<ion-label floating>Password</ion-label>\n	     <ion-input type="password"></ion-input>\n	   </ion-item>\n	   <button ion-button type="submit" block color="danger" round>Log in</button>\n	</form>-->\n	\n <form (ngSubmit)="loguin()">\n 	<div style="text-align: center;padding-bottom:60px;padding-top:40px">\n	 	<ion-img width="150px" height="150px" src="assets/imgs/icono.png" style="background-color: #FFFFFF;align:center">	\n		</ion-img>\n	</div>\n   <ion-item>\n     <ion-label floating>Username</ion-label>\n     <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n   </ion-item>\n <ion-item>\n   <ion-label floating>Password</ion-label>\n     <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n   </ion-item>\n   <button ion-button block color="danger" type="submit" round style="margin-top:10%">Log in</button>\n 	<ion-input type="text" name="respuesta" [(ngModel)]="respuesta" style="color:red"></ion-input>\n </form>\n <div style="text-align:center;margin-top:-10%">\n 	<p>¿No tienes cuenta?</p>\n 	<a (click)="registro()">!Registrate gratis!</a>\n </div>\n <!--<ion-input type="text" [(ngModel)]="data.nombre" name="dato"></ion-input>\n <ion-input type="text" [(ngModel)]="data.contrasenia" name="dato"></ion-input>-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\log-in\log-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_idService_idService__["a" /* idService */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], LogInPage);
    return LogInPage;
}());

//# sourceMappingURL=log-in.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anime_profile_anime_profile__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SeasonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeasonsPage = (function () {
    function SeasonsPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.animes = [];
        this.bDatos = false;
        this.database.getAnimes().then(function (data) {
            console.log(data);
            _this.datosTemporada = data;
            _this.bDatos = true;
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
        }, function (error) {
            console.log(error);
        });
    }
    SeasonsPage.prototype.detalle = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__anime_profile_anime_profile__["a" /* AnimeProfilePage */], {
            id: id
        });
    };
    SeasonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeasonsPage');
    };
    SeasonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seasons',template:/*ion-inline-start:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\seasons\seasons.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Temporadas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="bDatos">\n    <ion-list *ngFor="let d of datosTemporada">\n      <ion-list-header style="background-color:#B0A6A4;margin-bottom:-2%">\n        <b color="white">{{d.nombre}}</b>\n      </ion-list-header>\n      <button ion-item *ngFor="let a of d.anime" (click)="detalle(a.id)">\n        {{a.titulo}} <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Servidor\Desktop\Ionic 3\ionic_proyecto\Hidekime\src\pages\seasons\seasons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], SeasonsPage);
    return SeasonsPage;
}());

//# sourceMappingURL=seasons.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return idService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var idService = (function () {
    function idService() {
    }
    idService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], idService);
    return idService;
}());

//# sourceMappingURL=idService.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map