import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Hero } from "./../models/hero";
import { REMOVE_HERO } from "./../store/actions/actions";

import "./../../rxjs-extensions";

const addSideNavID = "addHeroBtn";

declare var window: any;

@Component({
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.css"]
})

export class HeroesComponent implements OnInit {

    heroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);

    constructor(private router: Router, private store: Store<any>) {
        this.heroes$ = this.store.select("heroes");
    }

    ngOnInit() {
        this.store.dispatch({ type: "SHOW_LOADING" });
        this.heroes$.subscribe(() => this.store.dispatch({ type: "HIDE_LOADING" }));
    }

    addHero() {
        //this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-add"] } }]);
        this.showNav();
    }

    editHero(hero: Hero) {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-edit", hero.id] } }]);
    }

    displayHero(hero: Hero) {
        this.router.navigate(["/heroes-display", hero.id]);
    }

    removeHero(hero: Hero) {
        this.store.dispatch({ type: REMOVE_HERO, payload: hero });
    }

    showNav() {
        window.$("#" + addSideNavID).sideNav({
            menuWidth: 500, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });
        setTimeout(() => window.$("#" + addSideNavID).sideNav("show"));
    }

    hideNav() {
        setTimeout(() => window.$("#" + addSideNavID).sideNav("hide"));
        this.destroyNav();
    }

    destroyNav() {
        setTimeout(() => window.$("#" + "#" + addSideNavID).sideNav("destroy"), 500);
    }

}
