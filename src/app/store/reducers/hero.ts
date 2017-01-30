import { ActionReducer, Action } from "@ngrx/store";
import { RECEIVE_GET_HERO, RECEIVE_UPDATE_HERO } from "./../actions/actions";
import { Hero } from "./../../models/hero";

const initialState: Hero = {};

export const hero: ActionReducer<Hero> = (state: Hero = initialState, action: Action) => {
    switch (action.type) {
        case RECEIVE_GET_HERO:
            const hero: Hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return hero;
        case RECEIVE_UPDATE_HERO:
            const updatedHero: Hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return updatedHero;
        default:
            return state;
    }
}