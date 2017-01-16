import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
    selector: "sidenav",
    templateUrl: './sidenav.component.html'
})

export class SideNavComponent implements OnInit {

    ngOnInit() {
        window.$(document).ready(function () {
            window.$(".btn-collapse").sideNav({
                menuWidth: 600, // Default is 240
                edge: "right", // Choose the horizontal origin
                closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: false // Choose whether you can drag to open on touch screens
            });
            console.info("Initialized SideNav");
        });
    }

    closeNav(){
        setTimeout(() => window.$(".btn-collapse").sideNav("hide"));
    }

    destroyNav() {
        setTimeout(() => window.$(".btn-collapse").sideNav("destroy"));
    }

}

