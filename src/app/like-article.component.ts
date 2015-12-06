import {
    Component,
    FORM_DIRECTIVES, CORE_DIRECTIVES,
    Input
} from 'angular2/angular2';

import {Article} from './article';
import {ApiService} from "./apiService";

@Component({
    selector: 'button-like-article',
    template:`
        <button (click)="onLike()">
            <span class="badge"> {{article.no_of_likes}}</span>
            Like
        </button>
    `,
    styles:[``],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class LikeArticle {

    @Input() article:Article;

    constructor(private _apiService: ApiService) {}

    onLike(){
        this.article.like();
        this._apiService.likeArticle(this.article);
    }

}


