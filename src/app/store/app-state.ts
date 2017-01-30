import { Hero } from "./../models/hero";

export interface AppState {
    loader : boolean,
    hero : Hero,
    heroes : Hero[],
    filter : Hero[],
    herofriends : Hero[]
} 