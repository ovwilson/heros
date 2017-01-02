import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Hero } from "./../models/hero";
import { REMOVE_HERO } from "./../actions/actions";

import "./../../rxjs-extensions";

declare var window: any;

@Component({
    templateUrl: "./heroes.component.html"
})

export class HeroesComponent implements OnInit {

    heroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);

    constructor(private router: Router, private store: Store<any>) {
        this.heroes$ = this.store.select("heroes");
    }

    ngOnInit() {

    }

    addHero() {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-add"] } }]);
        this.showNav();
    }

    editHero(hero: Hero) {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-edit", hero.id] } }]);
        this.showNav();
    }

    removeHero(hero: Hero) {
        this.store.dispatch({ type: REMOVE_HERO, payload: hero });
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
