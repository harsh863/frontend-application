import { StoreAction } from '../../models/core/store-action.model';
import { AppConfigAction } from '../types/app-config.type';
import { AppConfig } from '../../models/main/app/app-config.model';
import appConfigService from '../../services/app-config.service';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  appConfigFetchCompletedAction,
  appConfigFetchErrorAction,
} from '../actions/app-config.action';

function* fetchAppConfig({ payload }: StoreAction<AppConfigAction>) {
  const { id } = payload;
  try {
    const config: AppConfig = yield call(appConfigService.getAppConfig, id);
    yield put(appConfigFetchCompletedAction(config));
  } catch (error: any) {
    yield put(appConfigFetchErrorAction(error));
  }
}

function* appConfigSaga() {
  yield all([
    takeLatest(AppConfigAction.FETCH_APP_CONFIGURATION, fetchAppConfig),
  ]);
}

export default appConfigSaga;
