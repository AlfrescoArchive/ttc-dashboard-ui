(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _twitter_campaigns_twitter_campaigns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter-campaigns/twitter-campaigns.component */ "./src/app/twitter-campaigns/twitter-campaigns.component.ts");
/* harmony import */ var _twitter_campaign_details_twitter_campaign_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitter-campaign-details/twitter-campaign-details.component */ "./src/app/twitter-campaign-details/twitter-campaign-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _twitter_campaigns_twitter_campaigns_component__WEBPACK_IMPORTED_MODULE_2__["TwitterCampaignsComponent"]
    },
    {
        path: 'campaigns',
        component: _twitter_campaigns_twitter_campaigns_component__WEBPACK_IMPORTED_MODULE_2__["TwitterCampaignsComponent"]
    },
    {
        path: 'campaigns/:id',
        component: _twitter_campaign_details_twitter_campaign_details_component__WEBPACK_IMPORTED_MODULE_3__["TwitterCampaignDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-icon {\n  padding: 0 14px;\n}\n\n.header-spacer {\n  flex: 1 1 auto;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>{{title}}</span>\n    <span class=\"header-spacer\"></span>\n    <fa name=\"twitter\" animation=\"spin\"></fa>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_twitter_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/twitter-client.service */ "./src/app/services/twitter-client.service.ts");
/* harmony import */ var _twitter_campaigns_twitter_campaigns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twitter-campaigns/twitter-campaigns.component */ "./src/app/twitter-campaigns/twitter-campaigns.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _twitter_campaign_details_twitter_campaign_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twitter-campaign-details/twitter-campaign-details.component */ "./src/app/twitter-campaign-details/twitter-campaign-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _twitter_campaigns_twitter_campaigns_component__WEBPACK_IMPORTED_MODULE_6__["TwitterCampaignsComponent"],
                _twitter_campaign_details_twitter_campaign_details_component__WEBPACK_IMPORTED_MODULE_9__["TwitterCampaignDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_twitter_client_service__WEBPACK_IMPORTED_MODULE_5__["TwitterClientService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/twitter-client.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/twitter-client.service.ts ***!
  \****************************************************/
/*! exports provided: TwitterClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterClientService", function() { return TwitterClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterClientService = /** @class */ (function () {
    function TwitterClientService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:4200/activiti-api';
    }
    TwitterClientService.prototype.getCampaigns = function () {
        return this.http.get(this.BASE_URL + '/campaigns');
    };
    TwitterClientService.prototype.getPositiveTweets = function (id) {
        return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/rank/' + id + '/positive');
    };
    TwitterClientService.prototype.getNegativeTweets = function (id) {
        return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/rank/' + id + '/negative');
    };
    TwitterClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TwitterClientService);
    return TwitterClientService;
}());



/***/ }),

/***/ "./src/app/twitter-campaign-details/twitter-campaign-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/twitter-campaign-details/twitter-campaign-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th.mat-sort-header-sorted {\n  color: black;\n}\n\ntable {\n  width: 100%;\n}\n\nmat-grid-tile {\n  background: lightblue;\n  overflow-y: auto;\n}\n\nmat-grid-tile ::ng-deep .mat-figure {\n  display: block !important;\n}\n"

/***/ }),

/***/ "./src/app/twitter-campaign-details/twitter-campaign-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/twitter-campaign-details/twitter-campaign-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n  <mat-grid-tile>\n    <table mat-table [dataSource]=\"positiveFeeds\" matSort class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"nroOfTweets\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.nroOfTweets}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"userName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.userName}}</td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <table mat-table [dataSource]=\"negativeFeeds\" matSort class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"nroOfTweets\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.nroOfTweets}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"userName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.userName}}</td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n  <mat-grid-tile>5</mat-grid-tile>\n\n</mat-grid-list>\n\n\n"

/***/ }),

/***/ "./src/app/twitter-campaign-details/twitter-campaign-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/twitter-campaign-details/twitter-campaign-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: TwitterCampaignDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterCampaignDetailsComponent", function() { return TwitterCampaignDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_twitter_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/twitter-client.service */ "./src/app/services/twitter-client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwitterCampaignDetailsComponent = /** @class */ (function () {
    function TwitterCampaignDetailsComponent(router, route, twitterClientService) {
        this.router = router;
        this.route = route;
        this.twitterClientService = twitterClientService;
        this.displayedColumns = ['nroOfTweets', 'userName'];
    }
    TwitterCampaignDetailsComponent.prototype.ngOnInit = function () {
        this.getPositiveTweets();
        this.getNegativeTweets();
    };
    TwitterCampaignDetailsComponent.prototype.getNegativeTweets = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.twitterClientService.getNegativeTweets(params.id).subscribe(function (data) {
                _this.negativeFeeds = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.negativeFeeds.sort = _this.sort;
            }, function (error) {
                console.log(error);
            });
        });
    };
    TwitterCampaignDetailsComponent.prototype.getPositiveTweets = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.twitterClientService.getPositiveTweets(params.id).subscribe(function (data) {
                _this.positiveFeeds = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.positiveFeeds.sort = _this.sort;
            }, function (error) {
                console.log(error);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TwitterCampaignDetailsComponent.prototype, "sort", void 0);
    TwitterCampaignDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-campaign-details',
            template: __webpack_require__(/*! ./twitter-campaign-details.component.html */ "./src/app/twitter-campaign-details/twitter-campaign-details.component.html"),
            styles: [__webpack_require__(/*! ./twitter-campaign-details.component.css */ "./src/app/twitter-campaign-details/twitter-campaign-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_twitter_client_service__WEBPACK_IMPORTED_MODULE_2__["TwitterClientService"]])
    ], TwitterCampaignDetailsComponent);
    return TwitterCampaignDetailsComponent;
}());



/***/ }),

/***/ "./src/app/twitter-campaigns/twitter-campaigns.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/twitter-campaigns/twitter-campaigns.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"

/***/ }),

/***/ "./src/app/twitter-campaigns/twitter-campaigns.component.html":
/*!********************************************************************!*\
  !*** ./src/app/twitter-campaigns/twitter-campaigns.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\"  *ngFor=\"let campaign of campaigns\">\n  <mat-card-header>\n    <mat-card-title>{{campaign.name}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n        {{campaign.serviceId}} - {{campaign.name}} -  {{campaign.lang}}\n        Twitter Campaign\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button (click)=\"openCampaign(campaign)\">OPEN</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/twitter-campaigns/twitter-campaigns.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/twitter-campaigns/twitter-campaigns.component.ts ***!
  \******************************************************************/
/*! exports provided: TwitterCampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterCampaignsComponent", function() { return TwitterCampaignsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_twitter_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/twitter-client.service */ "./src/app/services/twitter-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitterCampaignsComponent = /** @class */ (function () {
    function TwitterCampaignsComponent(twitterClientService, router) {
        var _this = this;
        this.twitterClientService = twitterClientService;
        this.router = router;
        twitterClientService.getCampaigns().subscribe(function (data) {
            _this.campaigns = data;
        }, function (error) {
            console.log(error);
        });
    }
    TwitterCampaignsComponent.prototype.ngOnInit = function () {
    };
    TwitterCampaignsComponent.prototype.openCampaign = function (campaign) {
        this.router.navigate(['/campaigns', campaign.name]);
    };
    TwitterCampaignsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-campaigns',
            template: __webpack_require__(/*! ./twitter-campaigns.component.html */ "./src/app/twitter-campaigns/twitter-campaigns.component.html"),
            styles: [__webpack_require__(/*! ./twitter-campaigns.component.css */ "./src/app/twitter-campaigns/twitter-campaigns.component.css")]
        }),
        __metadata("design:paramtypes", [_services_twitter_client_service__WEBPACK_IMPORTED_MODULE_1__["TwitterClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TwitterCampaignsComponent);
    return TwitterCampaignsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mromano/dev/jbcnconf-2018/twitter-campaigns/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map