import { StoreAction } from '../../models/core/store-action.model';
import { AppConfig } from '../../models/main/app/app-config.model';
import { AppConfigAction } from '../types/app-config.type';

export interface AppConfigState {
  data?: AppConfig;
  loading: boolean;
  error?: string;
}

const initialState: AppConfigState = {
  loading: false,
};

const appConfigReducer = (
  state: AppConfigState = initialState,
  action: StoreAction<AppConfigAction>
) => {
  switch (action.type) {
    case AppConfigAction.FETCH_APP_CONFIGURATION: {
      return {
        ...(state || {}),
        error: '',
        loading: true,
      };
    }
    case AppConfigAction.FETCH_APP_CONFIGURATION_COMPLETED: {
      const { config } = action.payload as { config: AppConfig };
      return {
        ...(state || {}),
        data: config,
        loading: false,
      };
    }
    case AppConfigAction.FETCH_APP_CONFIGURATION_ERROR: {
      const { error } = action.payload;
      return {
        ...(state || {}),
        error,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default appConfigReducer;
