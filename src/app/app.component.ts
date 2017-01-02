import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideNavComponent } from "./sidenav/sidenav.component";

import "../../public/styles.css";

@Component({
    selector: "body",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {

    ngOnInit() {

    }

}