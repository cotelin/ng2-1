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
var article_1 = require('./article');
var apiService_1 = require("./apiService");
var LikeArticle = (function () {
    function LikeArticle(_apiService) {
        this._apiService = _apiService;
    }
    LikeArticle.prototype.onLike = function () {
        this.article.like();
        this._apiService.likeArticle(this.article);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', article_1.Article)
    ], LikeArticle.prototype, "article");
    LikeArticle = __decorate([
        angular2_1.Component({
            selector: 'button-like-article',
            template: "\n        <button (click)=\"onLike()\">\n            <span class=\"badge\"> {{article.no_of_likes}}</span>\n            Like\n        </button>\n    ",
            styles: [""],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [apiService_1.ApiService])
    ], LikeArticle);
    return LikeArticle;
})();
exports.LikeArticle = LikeArticle;
//# sourceMappingURL=like-article.component.js.map