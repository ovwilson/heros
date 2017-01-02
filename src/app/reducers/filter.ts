import { ActionReducer, Action } from '@ngrx/store';
import { Hero } from "./../models/hero";

export const SHOW_TOP_RATED = "SHOW_TOP_RATED";

const initialState: Hero[] = [];

export const filter: ActionReducer<Hero[]> = (state: Hero[] = initialState, action: Action) => {
    switch (action.type) {
        case SHOW_TOP_RATED:
            return action.payload.heroes.filter(hero => hero.topRated);
        default:
            return state;
    }
}

