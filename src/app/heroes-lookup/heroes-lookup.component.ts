import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Hero } from "./../models/hero";

import "./../../rxjs-extensions";
declare var window: any;

@Component({
    templateUrl: "./heroes-lookup.component.html"
})

export class HeroesLookupComponent implements OnInit {

    heroes$: Observable<Hero[]> = Observable.of<Hero>([]);
    heroes: Hero[] = [];
    selectedHeroes: Hero[] = [];
    searchTerms$: Subject<string> = new Subject<string>();
    id : number;


    constructor(private store: Store<any>, private router: Router, private route : ActivatedRoute) {
        this.heroes$ = this.store.select("heroes");
    }

    ngOnInit() {
        this.showNav();
        this.store.dispatch({ type: "HIDE_LOADING" });
        this.searchTerms$
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.heroes$.flatMap(heroes => heroes).filter((hero: Hero) => hero.name.includes(term)))
            .subscribe(hero => this.heroes.push(hero));

            this.route.params.subscribe((params: Params) => this.id = params["id"] );
    
    }

    search(term: string) {
        this.heroes = [];
        term !== "" ? this.searchTerms$.next(term) : "";
    }

    selectHero(hero: Hero) {
        console.log(hero);
        this.selectedHeroes.push(hero);
    }

    removeHero(hero: Hero) {
        //const initialHeroes: Hero[] = this.selectedHeroes;

        //this.selectedHeroes
        //.filter((hero:Hero) => hero.id !== hero.id)
        //.map((hero:Hero) => [this.selectedHeroes,]);
    }

    showNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("show"), 500);
    }

    closeNav(){
        setTimeout(() => window.$(".btn-collapse").sideNav("hide"));
    }

    closeSideNav(){
        this.closeNav();
        this.router.navigate(["/heroes-display",this.id]);
    }


}
