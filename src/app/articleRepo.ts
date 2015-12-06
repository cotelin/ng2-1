

import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Article} from "./article";
import {ApiService} from "./apiService";

@Injectable()
export class ArticleRepo{


    public all_articles:Article[] = [];

    constructor( private _http:ApiService) {

    }


    getAll(){
        this._http.getAll();
        this.mapToArticle(this._http.all_articles);

        return this.all_articles;
    }
    likeArticle(){

    }

    private mapToArticle(data) {
        var articles:Article[] = [];

        for (var i in data) {
            console.log(this);
            var new_article = new Article();

            new_article.title = data[i].title;
            new_article.id = data[i].id;
            new_article.big_image = data[i].url;
            new_article.small_image = data[i].thumbnailUrl;

            articles.push(new_article);
        }
        return articles;
    };
}