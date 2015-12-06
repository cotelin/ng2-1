import { Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from './route.config';
import {ApiService} from './apiService';
import {Article} from './article';
import {ArticleItemRenderer} from "./articleItemRenderer";


@Component({
    selector: 'article-listing',
    template:`


    <ul class="heroes container-fluid" *ng-if="articles">
        <article-item-renderer *ng-for="#article of articles | slice:start:end "
            (click)="onSelect(article)"
            [ng-class]="getSelectedClass(article)"
            [article]="article"
            (like)="onLike( article)"
            (dislike)="onDislike( article)">
        </article-item-renderer>
    </ul>
    <div class="pagination">
        <button (click)="previousPage()" class="left"><i class="fa fa-chevron-left"></i> Turn Page</button>
        <button (click)="nextPage()" class="right">Turn Page <i class="fa fa-chevron-right"></i></button>
    </div>

    <div *ng-if="selectedArticle" class="selected-article-wrapper">
        <h2>{{selectedArticle.title}} details!</h2>
        <div><label>id: </label>{{selectedArticle.id}}</div>
        <div>
            <label>name: </label>
            <input [(ng-model)]="selectedArticle.title" placeholder="name"></input>
        </div>
    </div>

`,
    styles:[`
.heroes {list-style-type: none; margin-left: 1em; padding: 0;margin-right: 1em; }
.selected { background-color: blue; color: black; }
.selected-article-wrapper.on{
position: fixed;
    background-color: rgba(39, 70, 60, 0.64);
    width: 100%;
    height: 100%;
    top: 0;
    display: block;}
ul{ background-color:silver;}
.pagination{ width:100%}
.pagination button{ width:50%; margin:0; float:left; height:4em;}
`],
    directives: [
        ROUTER_DIRECTIVES,FORM_DIRECTIVES, CORE_DIRECTIVES,ArticleItemRenderer]
})
export class ArticleListing {
    public articles:Article[];
    public title = 'Tour of Heroes';
    public selectedArticle: Article;

    public perpage = 12;
    public start = 0;
    public end = this.perpage;


    constructor( private _apiService:ApiService,
                 private _router: Router){
        this._apiService.getAll().subscribe(
            data => this.articles = this._apiService.mapToArticles(data),
            err => console.log(err),
            () => console.log('Articles Download Complete')
        );
    }

    onSelect(article: Article) {
        //this._router.navigate(['/' + Routes.detail.as, {id: article.id}]);
    }
    getSelectedClass(article: Article) {
        return { 'selected': article === this.selectedArticle };
    }

    onLike( article: Article){
        article.like();
        this._apiService.likeArticle(article);
    }

    onDislike( article: Article){
        article.dislike();
        //this.apiService.likeArticle(article);
    }

    //Pagination
    nextPage(){
        this.start += this.perpage;
        this.end += this.perpage;
    }
    previousPage(){
        this.start -= this.perpage;
        this.end -= this.perpage;
    }
}


