export class Hero {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public topRated: boolean
    ) { }
}

export interface AppState {
    heroes: Hero[]
}
