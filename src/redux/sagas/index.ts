import { all, fork } from 'redux-saga/effects';
import appConfigSaga from './app-config.saga';
import productSaga from './product.saga';
import trlSaga from './trl.saga';

function* indexSaga() {
  yield all([fork(appConfigSaga), fork(productSaga), fork(trlSaga)]);
}

export default indexSaga;
