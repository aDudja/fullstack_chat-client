import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

export const authAPI = {
    login(email, password) {
        return instance.post('auth/login', {email, password})
    },

    register(email, password, name, surname) {
        return instance.post('auth/register', {email, password, name, surname})
    }
}

export const chatAPI = {
    createChat(token){
        return instance.post(`chat/create`, {}, {headers: {
            'Authorization': token
            }});
    }
}

export const messageAPI = {
    getByChatId(token, chatId, offset = 0, limit = 20){
        return instance.post(`message/getByChatId`, {chatId, offset, limit}, {headers: {
                'Authorization': token
            }});
    },
    create(token, text, chatId){
        return instance.post(`message/create`, {text, chatId}, {headers: {
                'Authorization': token
            }});
    }
}

export const profileAPI = {
    create(token, name, surname, file){
        return instance.patch(`profile/update`, {name, surname}, {headers: {
                'Authorization': `Bearer ${token}`
            }});
    },
    me(token, id){
        return instance.post(`profile/me`, {id}, {headers: {
                'Authorization': `Bearer ${token}`
            }});
    }
}

export const userAPI = {
    getUsers(token){
        return instance.post(`user/getUsers`, {}, {headers: {
                'Authorization': `Bearer ${token}`
            }});
    }
}