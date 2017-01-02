import { ActionReducer, Action } from "@ngrx/store";
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

const initialState: boolean = false;

export const loader: ActionReducer<boolean> = (state: boolean = initialState, action: Action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return false;
        case HIDE_LOADING:
            return true;
        default:
            return state;
    }
}

