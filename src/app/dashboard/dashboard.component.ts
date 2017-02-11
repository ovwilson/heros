import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { SHOW_TOP_RATED } from "./../store/reducers/filter";
import { Hero } from "./../models/hero";
import { SHOW_LOADING, HIDE_LOADING } from "./../store/reducers/loader";

import "./../../rxjs-extensions";

declare var window: any;

@Component({
    templateUrl: "./dashboard.component.html"
})

export class DashboardComponent implements OnInit {

    heroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);

    constructor(private router: Router, private store: Store<any>) {
        this.heroes$ = this.store.select("heroes");
    }

    ngOnInit() {
        this.heroes$.flatMap((heroes: Hero[]) => heroes).filter((hero: Hero) => hero.topRated);
    }

    editHero(hero: Hero) {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-edit", hero.id] } }]);
        this.showNav();
    }

    showNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("show"));
    }

}

//this.store.dispatch({ type: SHOW_LOADING });
    //do(heroes => {
    //    this.store.dispatch({ type: SHOW_TOP_RATED, payload: { heroes: heroes } });
    //    this.store.dispatch({ type: HIDE_LOADING });
    //});

