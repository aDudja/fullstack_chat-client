import {
    SET_USER_DATA,
    CREATE_MESSAGE,
    HIDE_LOADER,
    REQUEST_MESSAGES,
    SHOW_LOADER,
    SET_REG_DATA,
    SEARCH_MODE, SET_USERS
} from "./types";
import {authAPI, profileAPI, userAPI} from "../api/api";

const userData = 'userData'

export function searchMode(bool) {
    return {
        type: SEARCH_MODE,
        payload: bool

    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        payload: users

    }
}

export const getUsers = (token) => async (dispatch) => {
    const response = await userAPI.getUsers(token)
    if (response.status === 200) {
        dispatch(setUsers(response.data))
    }
}

export function setAuthUserData(userId, email, name, surname, token, isAuthenticated) {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, email, name, surname, token, isAuthenticated
        }
    }
}

export function setRegUserData(value) {
    return {
        type: SET_REG_DATA,
        payload: {
            ...value
        }
    }
}

export const me = (token, id) => async (dispatch) => {
    const response = await profileAPI.me(token, id)
    if (response.status === 200) {
        let {_id, email, name, surname} = response.data
        dispatch(setAuthUserData(_id, email, name, surname, token, true))
    }
}

export const login = (email, password) => async (dispatch) => {
    const response = await authAPI.login(email, password)
    if (response.status === 200) {
        const token = response.data.token.split(' ')[1]
        const {_id, email, name, surname} = response.data.user
        localStorage.setItem(userData, JSON.stringify({token, userId: _id}))
        dispatch(setAuthUserData(_id, email, name, surname, token, true))
    }
}

export const logout = () => (dispatch) => {
        localStorage.removeItem(userData)
        dispatch(setAuthUserData(null, null, null, null, null, false))
}
export const registration = (email, password, name, surname) => async (dispatch) => {
    const response = await authAPI.register(email, password, name, surname)
    if (response.status === 200) {
        console.log(response)
    }
}



/////////////////////////////////////////////////////////////////////////


export function createMessage(message) {
    return {
        type: CREATE_MESSAGE,
        payload: message
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

// export function fetchMessages(message) {
//     return async dispatch => {
//         dispatch(showLoader())
//         const response = await fetch('')
//         const json = await response.json()
//         dispatch({type: FETCH_MESSAGES, payload: json})
//         dispatch(hideLoader())
//     }
// }

export function fetchMessages(message) {
    return {
        type: REQUEST_MESSAGES
    }
}