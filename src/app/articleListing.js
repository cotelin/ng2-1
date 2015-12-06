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
var router_1 = require('angular2/router');
var apiService_1 = require('./apiService');
var articleItemRenderer_1 = require("./articleItemRenderer");
var ArticleListing = (function () {
    function ArticleListing(_apiService, _router) {
        var _this = this;
        this._apiService = _apiService;
        this._router = _router;
        this.title = 'Tour of Heroes';
        this.perpage = 12;
        this.start = 0;
        this.end = this.perpage;
        this._apiService.getAll().subscribe(function (data) { return _this.articles = _this._apiService.mapToArticles(data); }, function (err) { return console.log(err); }, function () { return console.log('Articles Download Complete'); });
    }
    ArticleListing.prototype.onSelect = function (article) {
        //this._router.navigate(['/' + Routes.detail.as, {id: article.id}]);
    };
    ArticleListing.prototype.getSelectedClass = function (article) {
        return { 'selected': article === this.selectedArticle };
    };
    ArticleListing.prototype.onLike = function (article) {
        article.like();
        this._apiService.likeArticle(article);
    };
    ArticleListing.prototype.onDislike = function (article) {
        article.dislike();
        //this.apiService.likeArticle(article);
    };
    //Pagination
    ArticleListing.prototype.nextPage = function () {
        this.start += this.perpage;
        this.end += this.perpage;
    };
    ArticleListing.prototype.previousPage = function () {
        this.start -= this.perpage;
        this.end -= this.perpage;
    };
    ArticleListing = __decorate([
        angular2_1.Component({
            selector: 'article-listing',
            template: "\n\n\n    <ul class=\"heroes container-fluid\" *ng-if=\"articles\">\n        <article-item-renderer *ng-for=\"#article of articles | slice:start:end \"\n            (click)=\"onSelect(article)\"\n            [ng-class]=\"getSelectedClass(article)\"\n            [article]=\"article\"\n            (like)=\"onLike( article)\"\n            (dislike)=\"onDislike( article)\">\n        </article-item-renderer>\n    </ul>\n    <div class=\"pagination\">\n        <button (click)=\"previousPage()\" class=\"left\"><i class=\"fa fa-chevron-left\"></i> Turn Page</button>\n        <button (click)=\"nextPage()\" class=\"right\">Turn Page <i class=\"fa fa-chevron-right\"></i></button>\n    </div>\n\n    <div *ng-if=\"selectedArticle\" class=\"selected-article-wrapper\">\n        <h2>{{selectedArticle.title}} details!</h2>\n        <div><label>id: </label>{{selectedArticle.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ng-model)]=\"selectedArticle.title\" placeholder=\"name\"></input>\n        </div>\n    </div>\n\n",
            styles: ["\n.heroes {list-style-type: none; margin-left: 1em; padding: 0;margin-right: 1em; }\n.selected { background-color: blue; color: black; }\n.selected-article-wrapper.on{\nposition: fixed;\n    background-color: rgba(39, 70, 60, 0.64);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    display: block;}\nul{ background-color:silver;}\n.pagination{ width:100%}\n.pagination button{ width:50%; margin:0; float:left; height:4em;}\n"],
            directives: [
                router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, articleItemRenderer_1.ArticleItemRenderer]
        }), 
        __metadata('design:paramtypes', [apiService_1.ApiService, router_1.Router])
    ], ArticleListing);
    return ArticleListing;
})();
exports.ArticleListing = ArticleListing;
//# sourceMappingURL=articleListing.js.map