import {SET_REG_DATA} from "./types";

const initialState = {
    email: null,
    password: null,
    name: null,
    surname: null,
    files: null,
}

export const regReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REG_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}