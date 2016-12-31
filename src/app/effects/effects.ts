import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Hero } from "./../models/hero";
import { LISTEN_TO_HEROES } from "./../actions/actions";

import "./../../rxjs-extensions";

declare var firebase: any;

@Injectable()

export class FirebaseEffects {

    constructor(private actions$: Actions, private store: Store<any>) { }

    @Effect({ dispatch: false }) listenForTodos$ = this.actions$.ofType(LISTEN_TO_HEROES)
        .do(() => {

            // Listen for added values
            firebase.database().ref("/data").on("child_added", (snapshot) => {
                console.info("child_added:", snapshot.val());
                //  this.store.dispatch({ type: RECEIVE_ADD_TODO, payload: { key: snapshot.key, data: snapshot.val() } });
            });

            // Listen for changed values
            firebase.database().ref("/data").on("child_changed", (snapshot) => {
                console.info("child_changed:", snapshot.val());
                // this.store.dispatch({ type: RECEIVE_TOOGLE_TODO, payload: { key: snapshot.key, data: snapshot.val() } });
            });

            // Listen for Removed values
            firebase.database().ref("/data").on("child_removed", (snapshot) => {
                console.info("child_removed:", snapshot.val());
                // this.store.dispatch({ type: RECEIVE_REMOVE_TODO, payload: { key: snapshot.key, data: snapshot.val() } });
            });
        });

}