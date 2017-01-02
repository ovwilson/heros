import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
    selector: "loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.css"]
})

export class LoaderComponent implements OnInit {

    showLoading: boolean = false;

    constructor(private store: Store<boolean>) { }

    ngOnInit() {
        this.store.select("loader").subscribe((loader: boolean) => this.showLoading = loader);
    }

}
