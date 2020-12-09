import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* fakeconnector_get_pets_listWorker(action) {
  try {
    const result = yield call(apiService.fakeconnector_get_pets_list, action)
    yield put(actions.fakeconnector_get_pets_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.fakeconnector_get_pets_listFailed(err, action))
  }
}
function* fakeconnector_get_pets_listWatcher() {
  yield takeEvery(
    types.FAKECONNECTOR_GET_PETS_LIST,
    fakeconnector_get_pets_listWorker
  )
}
export default function* rootSaga() {
  const sagas = [fakeconnector_get_pets_listWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
