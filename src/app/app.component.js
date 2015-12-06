var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var apiService_1 = require('./apiService');
var router_1 = require('angular2/router');
var route_config_1 = require('./route.config');
var AppComponent = (function () {
    function AppComponent() {
        this.routes = route_config_1.Routes;
        this.title = 'Newspaperoo';
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n        <h1 class=\"site-title\"><i class=\"fa fa-barcode\"></i>{{title}}</h1>\n        <router-outlet></router-outlet>\n    ",
            styles: ["\n    .site-title{\n    text-align:center; margin-top: 0;\n    padding-top: 10px;\n    font-family: 'Poiret One', cursive;\n    }\n    "],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                apiService_1.ApiService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map