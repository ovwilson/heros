import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {

    }

    addHero() {
        this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-add"] } }]);
        this.showNav();
    }

    showNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("show"));
    }

    hideNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("hide"));
    }

    destroyNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("destroy"));
    }

}
