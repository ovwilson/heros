import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Hero } from "./models/hero";
import { LISTEN_TO_HEROES, HEROES_FILTER_FRIENDS } from "./store/actions/actions";
import "../../public/styles.css";

@Component({
    selector: "body",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {

    title: string = "Tour of Heroes";
    hero: Hero = {};
   
    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.dispatch({ type: LISTEN_TO_HEROES });
        this.store.dispatch({ type: HEROES_FILTER_FRIENDS, payload:{list:[2,4,3,0,2,2], userList:[0,4,3,2,3]} });    
    }


}