
import {ArticleListing} from "./articleListing";
import {RouteDefinition} from 'angular2/router';
import {ArticleDetail} from "./articleDetail";

export const Routes = {

    articles: {
        path: '/',
        as: 'Articles',
        component: ArticleListing,
        link: ['/Articles']
    },
    detail: {
        path: '/article/:id',
        as: 'Detail',
        component: ArticleDetail,
        link: ['/Detail']
    }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);