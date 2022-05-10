import { StoreAction } from '../../models/core/store-action.model';
import { AppConfigAction } from '../types/app-config.type';
import { AppConfig } from '../../models/main/app/app-config.model';

export const appConfigFetchAction = (
  id: number
): StoreAction<AppConfigAction> => ({
  type: AppConfigAction.FETCH_APP_CONFIGURATION,
  payload: { id },
});

export const appConfigFetchCompletedAction = (
  config: AppConfig
): StoreAction<AppConfigAction> => ({
  type: AppConfigAction.FETCH_APP_CONFIGURATION_COMPLETED,
  payload: { config },
});

export const appConfigFetchErrorAction = (
  error: string
): StoreAction<AppConfigAction> => ({
  type: AppConfigAction.FETCH_APP_CONFIGURATION_ERROR,
  payload: { error },
});
