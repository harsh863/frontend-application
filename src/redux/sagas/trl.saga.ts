import { TRLAction } from '../types/trl.type';
import { TRL } from '../../models/main/trl/trl.model';
import trlService from '../../services/trl.service';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  trlListFetchCompletedAction,
  trlListFetchErrorAction,
} from '../actions/trl.action';

function* fetchTRLs() {
  try {
    const trls: TRL[] = yield call(trlService.getTRLs);
    yield put(trlListFetchCompletedAction(trls));
  } catch (error: any) {
    yield put(trlListFetchErrorAction(error));
  }
}

function* trlSaga() {
  yield all([takeLatest(TRLAction.FETCH_TRL_LIST, fetchTRLs)]);
}

export default trlSaga;
