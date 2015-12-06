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
var article_1 = require('./article');
var articleListing_1 = require("./articleListing");
var articleRepo_1 = require("./articleRepo");
var router_1 = require('angular2/router');
var route_config_1 = require('./route.config');
var articleDetail_1 = require("./articleDetail");
var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.routes = route_config_1.Routes;
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    <h1 >{{title}}</h1>\n\n    <article-listing ></article-listing>\n    <article-detail></article-detail>\n    ",
            styles: [],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, articleListing_1.ArticleListing, router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS,
                angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [apiService_1.ApiService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, apiService_1.ApiService, article_1.Article, articleRepo_1.ArticleRepo, articleDetail_1.ArticleDetail]);
//# sourceMappingURL=app.js.map