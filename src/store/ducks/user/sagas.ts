import {call, put, takeLatest} from "redux-saga/effects";
import {setIsAuth, setUserData, setUserMessage, setUserStatus} from "./actionCreators";
import {UserApi} from "../../../api/user-api";
import {Status} from "./contracts/state";
import {IFetchSignIn, IFetchSignUp, UserActionsType} from "./contracts/actionTypes";


export function* fetchSignInRequest({payload}: IFetchSignIn) {
    try {
        const {data} = yield call(UserApi.signIn, payload)
        yield put(setUserData(data.data))
        window.localStorage.setItem('token', data.data.token)
        yield put(setUserMessage(data.message))
        yield put(setUserStatus(Status.SIGNIN_SUCCESS))
        yield put(setIsAuth(true))
    } catch (error) {
        yield put(setUserStatus(Status.ERROR))
        alert('Ощибка загрузки данных с сервера\n' + error.message)
    }
}

export function* fetchSignUpRequest({payload}: IFetchSignUp) {
    try {
        yield put(setUserStatus(Status.LOADING))
        const message: string = yield call(UserApi.signUp, payload)
        yield put(setUserMessage(message))
        yield put(setUserStatus(Status.SIGNUP_SUCCESS))
    } catch (error) {
        yield put(setUserMessage('Возможно ваша почта или логин уже используются.'))
        yield put(setUserStatus(Status.ERROR))
    }
}

export function* fetchUserDataRequest() {
    try {
        const {data} = yield call(UserApi.getMe)
        yield put(setUserData(data.data))
        yield put(setUserMessage(data.message))
        yield put(setUserStatus(Status.SUCCESS))
        yield put(setIsAuth(true))
    } catch (error) {
        yield put(setUserStatus(Status.LOADING))
    }

}

export function* UserSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
}