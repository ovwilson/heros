import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { filter, SHOW_TOP_RATED } from "./../reducers/filter";
import { LISTEN_TO_HEROES, RESET_HEROES } from "./../actions/actions";
import { Hero } from "./../models/hero";

import "./../../rxjs-extensions";

@Component({
    templateUrl: "./dashboard.component.html"
})

export class DashboardComponent implements OnInit {

    topHeroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.dispatch({ type: RESET_HEROES });
        this.store.dispatch({ type: LISTEN_TO_HEROES });
        this.topHeroes$ = this.store.select("filter");
        this.store.select("heroes").subscribe(heroes => this.store.dispatch({ type: SHOW_TOP_RATED, payload: { heroes: heroes } }));
    }

}
