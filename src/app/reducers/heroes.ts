import { ActionReducer, Action } from "@ngrx/store";
import { RECEIVE_ADD_HERO, RESET_HEROES } from "./../actions/actions";
import { Hero } from "./../models/hero";

const initialState: Hero[] = [];

export const heroes: ActionReducer<Hero[]> = (state: Hero[] = initialState, action: Action) => {
    switch (action.type) {
        case RECEIVE_ADD_HERO:
            const hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description:action.payload.data.description,
                topRated:action.payload.data.topRated
            });
            return [...state, hero];
        case RESET_HEROES:
            return [];
        default:
            return state;
    }
}