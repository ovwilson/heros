import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

    ngOnInit(){
        
    }
    
    addHero() {
        this.showNav();
    }

    showNav() {
        // Show sideNav
        window.$(".btn-collapse").sideNav("show");
        // Hide sideNav
        // window.$(".button-collapse").sideNav("hide");
        // Destroy sideNav
        // window.$(".button-collapse").sideNav("destroy");
    }


}
