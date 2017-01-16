import { ActionReducer, Action } from "@ngrx/store";
import { SEARCH_HERO_FRIENDS } from "./../actions/actions";
import { Hero } from "./../models/hero";

const initialState: Hero[] = [];

export const herofriends: ActionReducer<Hero[]> = (state: Hero[] = initialState, action: Action) => {
    switch (action.type) {
        case SEARCH_HERO_FRIENDS:
            return action.payload.data.filter(hero => hero.id !== action.payload.term);
        default:
            return state;
    }
}