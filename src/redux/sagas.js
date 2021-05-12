import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_MESSAGES, REQUEST_MESSAGES} from "./types";
import {hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_MESSAGES, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_MESSAGES, payload})
        yield put(hideLoader())
    } catch (e) {
        //yield put(showAlert('Что-то пошло не так')
        yield put(hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch('')
    return response.json()
}