import {Injectable} from 'angular2/core';
import {ApiService} from "./apiService";

@Injectable()
export class Article{

    //constructor(public _http:ApiService){}

    id:             number;
    title:           string;
    body: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    big_image:string        = 'http://www.iedesign.co.uk/sites/all/themes/IE/logo.svg';
    small_image:string      = 'http://www.iedesign.co.uk/sites/all/themes/IE/logo.svg';
    no_of_likes:number      = 0;
    no_of_dislikes: number  = 0;

    like(){
        this.no_of_likes++;
        console.log('Likes:',this.no_of_likes);

    }
    dislike(){
        this.no_of_dislikes++;
        console.log('Dislikes:',this.no_of_dislikes);
    }


}