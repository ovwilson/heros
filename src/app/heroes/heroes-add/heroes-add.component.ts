import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_HERO } from "./../../actions/actions";
import { Hero } from "./../../models/hero";

import "./../../../rxjs-extensions";

declare var window: any;
declare var Materialize : any;

@Component({
    templateUrl: "./heroes-add.component.html"
})

export class HeroesAddComponent implements OnInit, AfterViewInit {

    hero: Hero = {};

    inputName: boolean = false;
    inputNameLabel: boolean = false;
    
    inputDescription: boolean = false;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.hero = { name: "", description: "", topRated: false };
    }

    ngDoCheck() {
        // Validation
        this.hero.name === "" ? this.inputName = true  : this.inputName = false;
        this.hero.name === "" ? this.inputNameLabel = true  : this.inputNameLabel = false;
        
        this.hero.description === "" ? this.inputDescription = true : this.inputDescription = false;
        Materialize.updateTextFields();
    }

    ngAfterViewInit(){
       // Materialize.updateTextFields();
    }

    addHero() {
        this.store.dispatch({ type: ADD_HERO, payload: this.hero });
    }

}