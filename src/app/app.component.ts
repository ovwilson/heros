import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { LISTEN_TO_HEROES } from "./actions/actions";
import "../../public/styles.css";

@Component({
    selector: "body",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {

    title: string = "Tour of Heroes";

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.dispatch({ type: LISTEN_TO_HEROES });
    }

}