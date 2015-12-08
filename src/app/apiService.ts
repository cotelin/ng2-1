/**
 * Created by cotoi on 04/11/15.
 */

import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Article} from "./article";
import {ArticleDetail} from "./articleDetail";

@Injectable()
export class ApiService{

    api_path = 'http://jsonplaceholder.typicode.com/';


    public all_articles:Article[] = [];

    constructor(  private http: Http) {}

    getAll(): any {
         return this.http.get(this.api_path+'photos').map(r => r.json());
    }

    getArticleByID(id:Number):any {
        return this.http.get(this.api_path+'photos'+'/'+id).map(r => r.json());
    }

    likeArticle(article:Article){
        var params;

        params='likes='+article.no_of_likes;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        this.http.post( this.api_path+'posts',
        params, {
                headers: headers
            })
        .map(res => res.json())
        .subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Article Liked!')
        );
    }

    mapToArticles(data) {
        var articles:Article[] = [];

        for (var i in data) {
            articles.push(this.mapToArticle(data[i]));
        }
        return articles;
    };
    mapToArticle(data):Article {
        var article:Article = new Article();

        article.title = data.title;
        article.id = data.id;
        article.big_image = 'http://lorempixel.com/1280/700?temp='+data.id;//data.url;
        article.small_image = 'http://lorempixel.com/400/400?temp='+data.id;//data.thumbnailUrl;

        return article;
    };



}