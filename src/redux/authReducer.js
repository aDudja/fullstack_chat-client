import {SET_USER_DATA} from "./types";

const initialState = {
    userId: null,
    email: null,
    name: null,
    surname: null,
    token: null,
    isAuthenticated: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}