import { combineReducers } from 'redux';
import productReducer, { ProductState } from './product.reducer';
import trlReducer, { TRLState } from './trl.reducer';
import appConfigReducer, { AppConfigState } from './app-config.reducer';

export interface AppState {
  appConfig: AppConfigState;
  products: ProductState;
  trls: TRLState;
}

const indexReducer = combineReducers<AppState>({
  appConfig: appConfigReducer,
  products: productReducer,
  trls: trlReducer,
});

export default indexReducer;
