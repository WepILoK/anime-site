import {call, put, takeLatest} from "redux-saga/effects";
import {setIsAuth, setUserData, setUserStatus} from "./actionCreators";
import {UserApi} from "../../../api/user-api";
import {IUserState, Status} from "./contracts/state";
import {IFetchSignIn, IFetchSignUp, UserActionsType} from "./contracts/actionTypes";
import {RegisterFormProps} from "../../../pages/Authorization/components/Register";


export function* fetchSignInRequest({payload}: IFetchSignIn) {
    try {
        const user: IUserState['user'] = yield call(UserApi.signIn, payload)
        if (user.length === 1) {
            yield put(setUserData(user))
            window.localStorage.setItem('token', user[0].token)
            yield put(setUserStatus(Status.SUCCESS))
            yield put(setIsAuth(true))
        } else {
            yield put(setUserStatus(Status.ERROR))
        }
    } catch (error) {
        yield put(setUserStatus(Status.ERROR))
        alert('Ощибка загрузки данных с сервера\n' + error.message)
    }
}

export function* fetchSignUpRequest({payload}: IFetchSignUp) {
    try {
        yield put(setUserStatus(Status.LOADING))
        yield call(UserApi.signUp, payload)
        yield put(setUserStatus(Status.SUCCESS))
    } catch (error) {
        yield put(setUserStatus(Status.ERROR))
    }
}

export function* fetchUserDataRequest() {
    try {
        const user: IUserState['user'] = yield call(UserApi.getMe)
        if (user.length === 1) {
            yield put(setUserData(user))
            yield put(setUserStatus(Status.SUCCESS))
            yield put(setIsAuth(true))
        } else {
            yield put(setUserStatus(Status.ERROR))
        }
    } catch (error) {
        yield put(setUserStatus(Status.ERROR))
    }

}

export function* UserSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
}