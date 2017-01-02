import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { SHOW_TOP_RATED } from "./../reducers/filter";
import { Hero } from "./../models/hero";
import { SHOW_LOADING, HIDE_LOADING } from "./../reducers/loader";

import "./../../rxjs-extensions";

declare var window: any;

@Component({
    templateUrl: "./dashboard.component.html"
})

export class DashboardComponent implements OnInit {

    topHeroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);

    constructor(private router: Router, private store: Store<any>) { }

    ngOnInit() {
        this.store.dispatch({ type: SHOW_LOADING })
        this.topHeroes$ = this.store.select("filter");
        this.store.select("heroes")
            .subscribe(heroes => {
                this.store.dispatch({ type: SHOW_TOP_RATED, payload: { heroes: heroes } });
                this.store.dispatch({ type: HIDE_LOADING });
            });

    }

    editHero(hero: Hero) {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-edit", hero.id] } }]);
        this.showNav();
    }

    showNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("show"));
    }

}
