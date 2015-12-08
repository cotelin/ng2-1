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
var Article = (function () {
    function Article() {
        this.body = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
        this.big_image = 'http://www.iedesign.co.uk/sites/all/themes/IE/logo.svg';
        this.small_image = 'http://www.iedesign.co.uk/sites/all/themes/IE/logo.svg';
        this.no_of_likes = Math.floor((Math.random() * 100) + 1);
        this.no_of_dislikes = Math.floor((Math.random() * 100) + 1);
    }
    Article.prototype.like = function () {
        this.no_of_likes++;
        console.log('Likes:', this.no_of_likes);
    };
    Article.prototype.dislike = function () {
        this.no_of_dislikes++;
        console.log('Dislikes:', this.no_of_dislikes);
    };
    Article = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Article);
    return Article;
})();
exports.Article = Article;
//# sourceMappingURL=article.js.map