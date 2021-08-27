import { all } from "redux-saga/effects";
import {AnimeListsSaga} from "./ducks/animeLists/sagas";

export default function* rootSaga() {
    yield all([
        AnimeListsSaga(),
    ])
}