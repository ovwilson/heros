import { ActionReducer, Action } from "@ngrx/store";
import { Hero } from "./../models/hero";

const initialState: Hero[] = [];

export const todos: ActionReducer<Hero[]> = (state: Hero[] = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}