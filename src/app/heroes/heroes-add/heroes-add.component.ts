import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_HERO } from "./../../store/actions/actions";
import { Hero } from "./../../models/hero";

import "./../../../rxjs-extensions";

declare var window: any;
declare var Materialize: any;

@Component({
    selector: "hero-add",
    templateUrl: "./heroes-add.component.html",
    styleUrls: ["./heroes-add.component.css"]
})

export class HeroesAddComponent implements OnInit {

    hero: Hero = {};

    inputName: boolean = false;
    inputDescription: boolean = false;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.hero = { name: "", description: "", topRated: false };
    }

    ngDoCheck() {
        // Validation
        this.hero.name === "" ? this.inputName = true : this.inputName = false;
        this.hero.description === "" ? this.inputDescription = true : this.inputDescription = false;
         Materialize.updateTextFields();
    }

    addHero() {
        this.store.dispatch({ type: ADD_HERO, payload: this.hero });
    }

}