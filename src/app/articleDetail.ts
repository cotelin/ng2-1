import {
    Component,
    FORM_DIRECTIVES, CORE_DIRECTIVES
} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from './route.config';
import {Article} from './article';
import {ApiService} from "./apiService";
import {LikeArticle} from "./like-article.component";
import {DislikeArticle} from "./dislike-article.component";


@Component({
    selector: 'article-detail',
    template:`
    <div class="article-detail-wrapper">
            <button [router-link]="routes.articles.link" class="back-button"><i class="fa fa-chevron-left"></i></button>
            <div *ng-if="article">
                <img class="bg-img" src="{{article.small_image}}">

                <div class="container">

                <div class="article-title">{{article.title}}</div>
                <div class="media">
                    <button-like-article [article]="article"></button-like-article>
                    <button-dislike-article [article]="article"></button-dislike-article>
                </div>
                <div class="article-body">
                <p><img class="header-img" src="{{article.small_image}}">{{article.body}}</p>

                </div>
                </div>

            </div>
    </div>
`,
    styles:[`
.article-detail-wrapper{
position:relative;
height:100%;


}
.media{
    margin-bottom:2em;
    margin-top:2em;
    text-align:center;
}
.back-button{
    position:absolute;
        top: -48px;
    font-size: 32px;
    line-height: 32px;
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
}
img.bg-img{
    position: absolute;
    height:100%;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    -webkit-filter: blur(10px) sepia(0.8);
}
img.header-img{
    float:left;
    max-width:50%;
    width: 30%;
    margin-right: 2em;
    margin-bottom: 1em;
}
.container{
position:absolute;
width:100%;
    margin-top: 15px;
}
.article-title{
    width:100%;
    //position: absolute;
    top:0; left:0;
    padding:20px;
    font-family: 'Cinzel', serif;
    text-align: center;
    font-size: 32px;
    background-color: rgba(222, 234, 231, 0.3);
    text-shadow: rgba(255, 255, 255, 0.44) 0px 1px;

}
.article_body{
font-size:larger;
}
.article-body p:first-child:first-letter {
float: left; color: #903;
font-size: 75px; line-height: 60px;
padding-top: 4px; padding-right: 8px; padding-left: 3px;
}
`],
    directives: [LikeArticle,DislikeArticle,FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class ArticleDetail {

    article:Article;
    routes = Routes;

    constructor(private _apiService: ApiService,
                private _routeParams: RouteParams) {

        let id = parseInt(_routeParams.get('id'), 10);
        this._apiService.getArticleByID(id).subscribe(
            data => this.article =  this._apiService.mapToArticle(data),
            err => console.log(err),
            () => console.log('Article '+id+' Download Complete')
        );

    }


}


