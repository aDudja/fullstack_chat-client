import {SEARCH_MODE, SET_USERS} from "./types";

const initialState = {
    searchMode: false,
    users: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MODE:
            return {...state, searchMode: action.payload}
        case SET_USERS:
            return {...state, users: action.payload}
        default:
            return state

    }
}