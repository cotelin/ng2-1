import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES,provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ApiService} from './apiService';

import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({
    selector: 'my-app',
    template:`
        <h1 class="site-title"><i class="fa fa-barcode"></i>{{title}}</h1>
        <router-outlet></router-outlet>
    `,
    styles:[`
    .site-title{
    text-align:center; margin-top: 0;
    padding-top: 10px;
    font-family: 'Poiret One', cursive;
    }
    `],
    directives: [ ROUTER_DIRECTIVES],
    providers: [
        ApiService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    routes = Routes;
    public title = 'Newspaperoo';
}


