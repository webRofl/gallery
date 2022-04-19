import { put, takeEvery, call } from 'redux-saga/effects';
import { UPDATE_PHOTOS, updatePhotosSuccess } from '../redux/galleryReducer';
import { getPhotosPromise } from '../api/photosApi';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getPhotosWorker(action) {
  yield delay(500);
  const data = yield call(() => getPhotosPromise(action.albumId));
  yield put(updatePhotosSuccess(action.albumId, data));
}

export function* getPhotosWatcher() {
  yield takeEvery(UPDATE_PHOTOS, getPhotosWorker);
}
