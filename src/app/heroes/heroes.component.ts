import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { LISTEN_TO_HEROES, RESET_HEROES } from "./../actions/actions";
import { Hero } from "./../models/hero";

import "./../../rxjs-extensions";

declare var window: any;

@Component({
    templateUrl: "./heroes.component.html"
})

export class HeroesComponent implements OnInit {
    
    heroes$ : Observable<Hero[]> = Observable.of<Hero[]>([]);

    constructor(private router: Router, private store : Store<any>) {
        this.heroes$ = this.store.select("heroes");
     }

    ngOnInit() {
        this.store.dispatch({type:RESET_HEROES});
        this.store.dispatch({type:LISTEN_TO_HEROES});
    }

    addHero() {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-add"] } }]);
        this.showNav();
    }

    showNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("show"));
    }

    hideNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("hide"));
    }

    destroyNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("destroy"));
    }

}
