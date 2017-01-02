import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Store } from '@ngrx/store';
import { UPDATE_HERO, GET_HERO } from "./../../actions/actions";
import { Observable } from "rxjs/Observable";
import { Hero } from "./../../models/hero";

declare var window: any;

@Component({
    templateUrl: "./heroes-edit.component.html"
})

export class HeroesEditComponent implements OnInit {

    hero$: Observable<Hero> = Observable.of<Hero>({});
    hero: Hero = { name: "", description: "", topRated: false };
    
    constructor(private route: ActivatedRoute, private store: Store<any>) { }

    ngOnInit() {
        this.hero$ = this.store.select("hero");
        this.hero$.subscribe(hero => this.hero = hero);
        this.route.params.subscribe((params: Params) => this.store.dispatch({ type: GET_HERO, payload: { id: params["id"] } }));
    }

    updateHero() {
        this.store.dispatch({ type: UPDATE_HERO, payload: this.hero });
    }

}
