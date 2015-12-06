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
var article_1 = require('./article');
var ArticleItemRenderer = (function () {
    function ArticleItemRenderer(_router) {
        this._router = _router;
        this.like = new angular2_1.EventEmitter();
        this.dislike = new angular2_1.EventEmitter();
    }
    ArticleItemRenderer.prototype.onSelect = function (article) {
        this._router.navigate(['/' + route_config_1.Routes.detail.as, { id: article.id }]);
    };
    ArticleItemRenderer.prototype.liked = function () {
        this.like.next(this.article);
    };
    ArticleItemRenderer.prototype.disliked = function () {
        this.dislike.next(this.article);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', article_1.Article)
    ], ArticleItemRenderer.prototype, "article");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], ArticleItemRenderer.prototype, "like");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], ArticleItemRenderer.prototype, "dislike");
    ArticleItemRenderer = __decorate([
        angular2_1.Component({
            selector: 'article-item-renderer',
            template: "\n              <li >\n                <img src=\"{{article.small_image}}\" (click)=\"onSelect(article)\">\n                <div class=\"article-title\"><p>{{article.title}}</p></div>\n                <div class=\"media\">\n                    <button (click)=\"liked()\" class=\"left\">\n                        <i class=\"fa fa-arrow-circle-up\"></i>\n                        <span class=\"badge\"> {{article.no_of_likes}}</span>\n                    </button>\n                    <button (click)=\"disliked()\" class=\"right\">\n                        <i class=\"fa fa-arrow-circle-down\"></i>\n                        <span class=\"badge\"> {{article.no_of_dislikes}}</span>\n                    </button>\n                </div>\n\n              </li>\n",
            styles: ["\n\nli {\n\n    cursor: pointer;\n    position: relative;\n    transition: all 0.2s ease;\n    float: left;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    width:32.1%;\n\n\tborder: 2px solid #fcfcfc;\n\tbox-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);\n\ttransition: opacity .4s ease-in-out;\n\toverflow:hidden;\n}\nimg{\n width:100%;\n -webkit-filter: blur(5px);\n\tfilter: blur(5px);\n-webkit-filter: blur(3px) grayscale(0.9) opacity(0.8);\n\n}\n.media{\nposition:absolute;\nbottom:0;\nwidth:100%;\nheight:auto;\n}\n.media button{height:3em}\n.media .right{\nposition:absolute;\nright:0;\n}\n.article-title{\n    width:100%;\n    position: absolute;\n    top:0px;\n    padding:20px;\n    font-family: 'Cinzel', serif;\n    text-align: center;\n    font-size: 20px;\n    background-color: rgba(222, 234, 231, 0.3);\n    text-shadow: rgba(255, 255, 255, 0.44) 0px 1px;\n\n}\n.article-title p:first-child:first-letter {\nfloat: left; color: #903;\nfont-size: 75px; line-height: 60px;\npadding-top: 4px; padding-right: 8px; padding-left: 3px;\n}\n\nli:hover {color: black; background-color: rgb(72, 50, 50);}\nli:hover img{\nfilter: blur(0);\n -webkit-filter: blur(0px);\n}\n.badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n}\n.selected { background-color: #EEE; color: #369; }\n@media screen and (max-width: 678px) {\n  li, .article-title { width: 100%; }\n}\n"],
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ArticleItemRenderer);
    return ArticleItemRenderer;
})();
exports.ArticleItemRenderer = ArticleItemRenderer;
//# sourceMappingURL=articleItemRenderer.js.map