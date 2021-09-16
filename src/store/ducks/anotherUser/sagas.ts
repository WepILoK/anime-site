import {call, put, takeLatest} from "redux-saga/effects";
import {UserApi} from "../../../api/user-api";
import {Status} from "./contracts/state";
import {AnotherUserActionsType, IFetchAnotherUserData} from "./contracts/actionTypes";
import {setAnotherUserData, setAnotherUserStatus} from "./actionCreators";


export function* fetchAnotherUserDataRequest({payload}: IFetchAnotherUserData) {
    try {
        yield put(setAnotherUserStatus(Status.LOADING))
        const {data} = yield call(UserApi.getAnotherUser, payload)
        yield put(setAnotherUserData(data))
        yield put(setAnotherUserStatus(Status.SUCCESS))
    } catch (error) {
        yield put(setAnotherUserStatus(Status.ERROR))
    }
}


export function* AnotherUserSaga() {
    yield takeLatest(AnotherUserActionsType.FETCH_ANOTHER_USER_DATA, fetchAnotherUserDataRequest)
}