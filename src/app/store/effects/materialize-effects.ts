import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {

    MATERIALIZE_INIT_SIDENAV,
    MATERIALIZE_SHOW_SIDENAV,
    MATERIALIZE_HIDE_SIDENAV,
    MATERIALIZE_DESTROY_SIDENAV,
    MATERIALIZE_CHECK_SIDEOVERLAY

} from "./../actions/actions";

import "./../../../rxjs-extensions";

declare var window: any;

@Injectable()

export class MaterializeEffects {

    constructor(private actions$: Actions, private store: Store<any>) { }

    @Effect() initSideNav$ = this.actions$.ofType(MATERIALIZE_INIT_SIDENAV)
        .map(() => {
            window.$(".btn-collapse").sideNav({
                menuWidth: 600, // Default is 240
                edge: "right", // Choose the horizontal origin
                closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: false // Choose whether you can drag to open on touch screens
            });
            console.info("Initialized SideNav");
            return {
                type: MATERIALIZE_SHOW_SIDENAV
            }
        });

    @Effect({ dispatch: false }) showNav$ = this.actions$.ofType(MATERIALIZE_SHOW_SIDENAV)
        .do(() => {
            setTimeout(() => window.$(".btn-collapse").sideNav("show"));
        });

    @Effect() hideNav$ = this.actions$.ofType(MATERIALIZE_HIDE_SIDENAV)
        .map(() => {
            window.$(".btn-collapse").sideNav("hide");
            return {
                type: MATERIALIZE_DESTROY_SIDENAV
            }
        });

    @Effect({ dispatch: false }) destroyNav$ = this.actions$.ofType(MATERIALIZE_DESTROY_SIDENAV)
        .do(() => {
            setTimeout(() => window.$(".btn-collapse").sideNav("destroy"), 500);
        });

    @Effect({ dispatch: false }) sideOverlay$ = this.actions$.ofType(MATERIALIZE_CHECK_SIDEOVERLAY)
        .map(() => {
            let thisStore = this.store;
            window.$("#sidenav-overlay").on("click", function () {
                thisStore.dispatch({ type: MATERIALIZE_HIDE_SIDENAV });
                console.log("closing & routing");
            });
        });

}