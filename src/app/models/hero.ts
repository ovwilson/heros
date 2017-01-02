export interface Hero {
    id?: string,
    name?:string,
    description?: string,
    topRated?: boolean
}

export interface AppState {
    heroes: Hero[]
}
