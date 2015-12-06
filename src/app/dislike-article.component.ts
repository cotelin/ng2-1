import {
    Component,
    FORM_DIRECTIVES, CORE_DIRECTIVES,
    Input
} from 'angular2/angular2';

import {Article} from './article';
import {ApiService} from "./apiService";

@Component({
    selector: 'button-dislike-article',
    template:`
        <button (click)="onDislike()">
            <span class="badge"> {{article.no_of_dislikes}}</span>
            DisLike
        </button>
    `,
    styles:[``],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class DislikeArticle {

    @Input() article:Article;

    constructor(private _apiService: ApiService) {}

    onDislike(){
        this.article.dislike();
        //this._apiService.likeArticle(this.article);
    }

}


