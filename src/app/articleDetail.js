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
var route_config_1 = require('./route.config');
var apiService_1 = require("./apiService");
var like_article_component_1 = require("./like-article.component");
var dislike_article_component_1 = require("./dislike-article.component");
var ArticleDetail = (function () {
    function ArticleDetail(_apiService, _routeParams) {
        var _this = this;
        this._apiService = _apiService;
        this._routeParams = _routeParams;
        this.routes = route_config_1.Routes;
        var id = parseInt(_routeParams.get('id'), 10);
        this._apiService.getArticleByID(id).subscribe(function (data) { return _this.article = _this._apiService.mapToArticle(data); }, function (err) { return console.log(err); }, function () { return console.log('Article ' + id + ' Download Complete'); });
    }
    ArticleDetail = __decorate([
        angular2_1.Component({
            selector: 'article-detail',
            template: "\n    <div class=\"article-detail-wrapper\">\n            <button [router-link]=\"routes.articles.link\" class=\"back-button\"><i class=\"fa fa-chevron-left\"></i></button>\n            <div *ng-if=\"article\">\n                <img class=\"bg-img\" src=\"{{article.small_image}}\">\n\n                <div class=\"container\">\n\n                <div class=\"article-title\">{{article.title}}</div>\n                <div class=\"media\">\n                    <button-like-article [article]=\"article\"></button-like-article>\n                    <button-dislike-article [article]=\"article\"></button-dislike-article>\n                </div>\n                <div class=\"article-body\">\n                <p><img class=\"header-img\" src=\"{{article.small_image}}\">{{article.body}}</p>\n\n                </div>\n                </div>\n\n            </div>\n    </div>\n",
            styles: ["\n.article-detail-wrapper{\nposition:relative;\nheight:100%;\n\n\n}\n.media{\n    margin-bottom:2em;\n    margin-top:2em;\n    text-align:center;\n}\n.back-button{\n    position:absolute;\n        top: -48px;\n    font-size: 32px;\n    line-height: 32px;\n    margin: 0;\n    padding: 0;\n    background: none;\n    border: 0;\n}\nimg.bg-img{\n    position: absolute;\n    height:100%;\n    top:0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    -webkit-filter: blur(10px) sepia(0.8);\n}\nimg.header-img{\n    float:left;\n    max-width:50%;\n    width: 30%;\n    margin-right: 2em;\n    margin-bottom: 1em;\n}\n.container{\nposition:absolute;\nwidth:100%;\n    margin-top: 15px;\n}\n.article-title{\n    width:100%;\n    //position: absolute;\n    top:0; left:0;\n    padding:20px;\n    font-family: 'Cinzel', serif;\n    text-align: center;\n    font-size: 32px;\n    background-color: rgba(222, 234, 231, 0.3);\n    text-shadow: rgba(255, 255, 255, 0.44) 0px 1px;\n\n}\n.article_body{\nfont-size:larger;\n}\n.article-body p:first-child:first-letter {\nfloat: left; color: #903;\nfont-size: 75px; line-height: 60px;\npadding-top: 4px; padding-right: 8px; padding-left: 3px;\n}\n"],
            directives: [like_article_component_1.LikeArticle, dislike_article_component_1.DislikeArticle, angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [apiService_1.ApiService, router_1.RouteParams])
    ], ArticleDetail);
    return ArticleDetail;
})();
exports.ArticleDetail = ArticleDetail;
//# sourceMappingURL=articleDetail.js.map