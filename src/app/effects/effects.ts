import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {
    LISTEN_TO_HEROES,
    ADD_HERO,
    UPDATE_HERO,
    GET_HERO,
    REMOVE_HERO,
    RECEIVE_ADD_HERO,
    RECEIVE_UPDATE_HERO,
    RECEIVE_UPDATE_HERO_TO_LIST,
    RECEIVE_GET_HERO,
    RECEIVE_REMOVE_HERO
} from "./../actions/actions";

import "./../../rxjs-extensions";

declare var firebase: any;

@Injectable()

export class FirebaseEffects {

    constructor(private actions$: Actions, private store: Store<any>) { }

    @Effect({ dispatch: false }) listenForTodos$ = this.actions$.ofType(LISTEN_TO_HEROES)
        .do(() => {

            // Listen for added values
            firebase.database().ref("/").on("child_added", (snapshot) => {
                console.info("child_added:", snapshot.val());
                this.store.dispatch({ type: RECEIVE_ADD_HERO, payload: { key: snapshot.key, data: snapshot.val() } });
            });

            // Listen for changed values
            firebase.database().ref("/").on("child_changed", (snapshot) => {
                console.info("child_changed:", snapshot.val());
                this.store.dispatch({ type: RECEIVE_UPDATE_HERO, payload: { key: snapshot.key, data: snapshot.val() } });
                this.store.dispatch({ type: RECEIVE_UPDATE_HERO_TO_LIST, payload: { key: snapshot.key, data: snapshot.val() } });
            });

            // Listen for Removed values
            firebase.database().ref("/").on("child_removed", (snapshot) => {
                console.info("child_removed:", snapshot.val());
                this.store.dispatch({ type: RECEIVE_REMOVE_HERO, payload: { key: snapshot.key, data: snapshot.val() } });
            });
        });

    @Effect({ dispatch: false }) addHero$ = this.actions$.ofType(ADD_HERO)
        .do((action: Action) => {
            firebase.database().ref("/").push(action.payload);
        });

    @Effect({ dispatch: false }) getHero$ = this.actions$.ofType(GET_HERO)
        .do((action: Action) => {
            firebase.database().ref("/" + action.payload.id).once("value").then((snapshot) => {
                this.store.dispatch({ type: RECEIVE_GET_HERO, payload: { key: snapshot.key, data: snapshot.val() } });
            });
        });

    @Effect({ dispatch: false }) updateHero$ = this.actions$.ofType(UPDATE_HERO)
        .do((action: Action) => {
            firebase.database().ref("/" + action.payload.id).set({
                name: action.payload.name,
                description: action.payload.description,
                topRated: action.payload.topRated
            });
        });

    @Effect({ dispatch: false }) removeHero$ = this.actions$.ofType(REMOVE_HERO)
        .do((action: Action) => {
            firebase.database().ref("/").child(action.payload.id).remove();
        });

  

}