var articleListing_1 = require("./articleListing");
var articleDetail_1 = require("./articleDetail");
exports.Routes = {
    articles: {
        path: '/',
        as: 'Articles',
        component: articleListing_1.ArticleListing,
        link: ['/Articles']
    },
    detail: {
        path: '/article/:id',
        as: 'Detail',
        component: articleDetail_1.ArticleDetail,
        link: ['/Detail']
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (name) { return exports.Routes[name]; });
//# sourceMappingURL=route.config.js.map