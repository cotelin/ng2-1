import {
    Component,
    FORM_DIRECTIVES, CORE_DIRECTIVES,
    Input, Output, EventEmitter
} from 'angular2/angular2';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from './route.config';

import {Article} from './article';

@Component({
    selector: 'article-item-renderer',
    template:`
              <li >
                <img src="{{article.small_image}}" (click)="onSelect(article)">
                <div class="article-title"><p>{{article.title}}</p></div>
                <div class="media">
                    <button (click)="liked()" class="left">
                        <i class="fa fa-arrow-circle-up"></i>
                        <span class="badge"> {{article.no_of_likes}}</span>
                    </button>
                    <button (click)="disliked()" class="right">
                        <i class="fa fa-arrow-circle-down"></i>
                        <span class="badge"> {{article.no_of_dislikes}}</span>
                    </button>
                </div>

              </li>
`,
    styles:[`

li {

    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    width:32.1%;

	border: 2px solid #fcfcfc;
	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
	transition: opacity .4s ease-in-out;
	overflow:hidden;
}
img{
 width:100%;
 -webkit-filter: blur(5px);
	filter: blur(5px);
-webkit-filter: blur(3px) grayscale(0.9) opacity(0.8);

}
.media{
position:absolute;
bottom:0;
width:100%;
height:auto;
}
.media button{height:3em}
.media .right{
position:absolute;
right:0;
}
.article-title{
    width:100%;
    position: absolute;
    top:0px;
    padding:20px;
    font-family: 'Cinzel', serif;
    text-align: center;
    font-size: 20px;
    background-color: rgba(222, 234, 231, 0.3);
    text-shadow: rgba(255, 255, 255, 0.44) 0px 1px;

}
.article-title p:first-child:first-letter {
float: left; color: #903;
font-size: 75px; line-height: 60px;
padding-top: 4px; padding-right: 8px; padding-left: 3px;
}

li:hover {color: black; background-color: rgb(72, 50, 50);}
li:hover img{
filter: blur(0);
 -webkit-filter: blur(0px);
}
.badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
}
.selected { background-color: #EEE; color: #369; }
@media screen and (max-width: 678px) {
  li, .article-title { width: 100%; }
}
`],
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ArticleItemRenderer {

    @Input() article:Article;
    @Output() like: EventEmitter;
    @Output() dislike: EventEmitter;

    constructor( private _router: Router ) {

        this.like = new EventEmitter();
        this.dislike = new EventEmitter();
    }

    onSelect(article: Article) {
        this._router.navigate(['/' + Routes.detail.as, {id: article.id}]);
    }

    liked(){
        this.like.next(this.article);
    }
    disliked(){
        this.dislike.next(this.article);
    }


}


