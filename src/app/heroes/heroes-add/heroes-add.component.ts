import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_HERO } from "./../../actions/actions";
import { Hero } from "./../../models/hero";

declare var window: any;

@Component({
    templateUrl: "./heroes-add.component.html"
})

export class HeroesAddComponent implements OnInit {

    hero: Hero = {};

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.hero = { name: "", description: "", topRated: false };
    }

    addHero() {
        this.store.dispatch({ type: ADD_HERO, payload: this.hero });
    }

}
