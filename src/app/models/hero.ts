export interface Hero {
    id?: string,
    description?: string,
    topRated?: boolean
}

export interface AppState {
    heroes: Hero[]
}
