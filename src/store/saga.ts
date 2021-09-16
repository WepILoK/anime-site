import { all } from "redux-saga/effects";
import {AnimeListsSaga} from "./ducks/animeLists/sagas";
import {UserSaga} from "./ducks/user/sagas";
import {AnotherUserSaga} from "./ducks/anotherUser/sagas";

export default function* rootSaga() {
    yield all([
        AnimeListsSaga(),
        UserSaga(),
        AnotherUserSaga(),
    ])
}