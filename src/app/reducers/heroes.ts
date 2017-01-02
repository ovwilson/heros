import { ActionReducer, Action } from "@ngrx/store";
import { RECEIVE_ADD_HERO, RECEIVE_REMOVE_HERO, RECEIVE_UPDATE_HERO_TO_LIST } from "./../actions/actions";
import { Hero } from "./../models/hero";

const initialState: Hero[] = [];

export const heroes: ActionReducer<Hero[]> = (state: Hero[] = initialState, action: Action) => {
    switch (action.type) {
        case RECEIVE_ADD_HERO:
            const hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return [...state, hero];
        case RECEIVE_UPDATE_HERO_TO_LIST:
            return state.map(hero => {
                return hero.id !== action.payload.key ? hero : Object.assign({}, hero, {
                    id: action.payload.key,
                    name: action.payload.data.name,
                    description: action.payload.data.description,
                    topRated: action.payload.data.topRated
                });
            });
        case RECEIVE_REMOVE_HERO:
            return state.filter(hero => hero.id !== action.payload.key);
        default:
            return state;
    }
}