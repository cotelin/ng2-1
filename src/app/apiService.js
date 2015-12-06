/**
 * Created by cotoi on 04/11/15.
 */
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
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var article_1 = require("./article");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.api_path = 'http://jsonplaceholder.typicode.com/';
        this.all_articles = [];
    }
    ApiService.prototype.getAll = function () {
        return this.http.get(this.api_path + 'photos').map(function (r) { return r.json(); });
    };
    ApiService.prototype.getArticleByID = function (id) {
        return this.http.get(this.api_path + 'photos' + '/' + id).map(function (r) { return r.json(); });
    };
    ApiService.prototype.likeArticle = function (article) {
        var params;
        params = 'likes=' + article.no_of_likes;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(this.api_path + 'posts', params, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Article Liked!'); });
    };
    ApiService.prototype.mapToArticles = function (data) {
        var articles = [];
        for (var i in data) {
            articles.push(this.mapToArticle(data[i]));
        }
        return articles;
    };
    ;
    ApiService.prototype.mapToArticle = function (data) {
        var article = new article_1.Article();
        article.title = data.title;
        article.id = data.id;
        article.big_image = data.url;
        article.small_image = data.thumbnailUrl;
        return article;
    };
    ;
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
})();
exports.ApiService = ApiService;
//# sourceMappingURL=apiService.js.map