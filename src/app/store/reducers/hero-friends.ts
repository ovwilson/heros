import { ActionReducer, Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { SEARCH_HERO_FRIENDS, HEROES_FILTER_FRIENDS } from "./../actions/actions";
import { Hero } from "./../../models/hero";

const initialState: Hero[] = [];

export const herofriends: ActionReducer<Hero[]> = (state: Hero[] = initialState, action: Action) => {
    switch (action.type) {
        case HEROES_FILTER_FRIENDS:
            const friendsList = action.payload.list.sort();
            const userList = action.payload.userList.sort();

            const friendsList$ = Observable.from(friendsList).distinct();//.subscribe(vals => console.log(vals));
            const userList$ = Observable.from(userList).distinct();

            friendsList$.sequenceEqual(userList$).subscribe(equals => console.warn(equals));

            return state;
        case SEARCH_HERO_FRIENDS:
            return action.payload.data.filter(hero => hero.id !== action.payload.term);
        default:
            return state;
    }
}