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
var core_1 = require('angular2/core');
var article_1 = require("./article");
var apiService_1 = require("./apiService");
var ArticleRepo = (function () {
    function ArticleRepo(_http) {
        this._http = _http;
        this.all_articles = [];
    }
    ArticleRepo.prototype.getAll = function () {
        this._http.getAll();
        this.mapToArticle(this._http.all_articles);
        return this.all_articles;
    };
    ArticleRepo.prototype.likeArticle = function () {
    };
    ArticleRepo.prototype.mapToArticle = function (data) {
        var articles = [];
        for (var i in data) {
            console.log(this);
            var new_article = new article_1.Article();
            new_article.title = data[i].title;
            new_article.id = data[i].id;
            new_article.big_image = data[i].url;
            new_article.small_image = data[i].thumbnailUrl;
            articles.push(new_article);
        }
        return articles;
    };
    ;
    ArticleRepo = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [apiService_1.ApiService])
    ], ArticleRepo);
    return ArticleRepo;
})();
exports.ArticleRepo = ArticleRepo;
//# sourceMappingURL=articleRepo.js.map