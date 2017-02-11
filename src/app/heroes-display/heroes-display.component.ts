import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { GET_HERO } from "./../store/actions/actions";
import { Hero } from "./../models/hero";

import "./../../rxjs-extensions";

declare var window: any;

@Component({
    templateUrl: "./heroes-display.component.html",
    styleUrls:["./heroes-display.component.css"]
})

export class HeroesDisplayComponent implements OnInit {

    hero$: Observable<Hero> = Observable.of<Hero>();
    id: string;

    constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) {
        this.hero$ = this.store.select("hero");
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => this.store.dispatch({ type: GET_HERO, payload: { id: params["id"] } }));
        this.initLists();
        this.hero$.filter(hero => Object.keys(hero).length > 0).subscribe(hero => this.id = hero.id);
    }

    initLists() {
        window.$(document).ready(function () {
            window.$('.collapsible').collapsible();
        });
    }

    addFriend() {
         this.router.navigate(["/heroes-display/"+this.id, { outlets: { "sidenav": ["heroes-lookup",this.id] } }]);
    }


}
