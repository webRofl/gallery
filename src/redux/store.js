import { createStore, combineReducers, applyMiddleware } from 'redux';
import galleryReducer from './galleryReducer';
import createSagaMiddleware from 'redux-saga';
import { getPhotosWatcher } from '../saga/updatePhotoSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  gallery: galleryReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(getPhotosWatcher);

export default store;
