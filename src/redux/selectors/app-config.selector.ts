import { AppState } from '../reducers';
import { createSelector } from 'reselect';
import { AppConfigState } from '../reducers/app-config.reducer';

const appConfigStateSelector = (state: AppState) => state.appConfig;

export const appConfigSelector = createSelector(
  [appConfigStateSelector],
  (appState: AppConfigState) => appState.data
);

export const appConfigLoadingSelector = createSelector(
  [appConfigStateSelector],
  (appState: AppConfigState) => appState.loading
);
