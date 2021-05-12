import {CREATE_MESSAGE, FETCH_MESSAGES} from "./types";

const initialState = {
    messages: [],
    fetchedMessages: []
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}
        case FETCH_MESSAGES:
            return {...state, messages: [...state.fetchedMessages, action.payload]}
        default:
            return state
    }
}