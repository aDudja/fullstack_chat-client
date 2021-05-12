import {CREATE_MESSAGE} from "./types";

const forbidden = ['fuck', 'dick', 'cunt']

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === CREATE_MESSAGE) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch()  // в диспатч положить экшенкреатор алерта
                }
            }
            return next(action)
        }

    }
}