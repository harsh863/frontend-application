import { StoreState } from '../../models/core/store-state.model';
import { TRL } from '../../models/main/trl/trl.model';
import { StoreAction } from '../../models/core/store-action.model';
import { TRLAction } from '../types/trl.type';

export interface TRLState extends StoreState<TRL> {}

const initialState: TRLState = {
  entities: {},
  entitiesLoading: false,
};

const trlReducer = (
  state: TRLState = initialState,
  action: StoreAction<TRLAction>
): TRLState => {
  switch (action.type) {
    case TRLAction.FETCH_TRL_LIST: {
      return {
        ...(state || {}),
        entitiesLoading: true,
      };
    }
    case TRLAction.FETCH_TRL_LIST_COMPLETED: {
      const { trls } = action.payload as { trls: TRL[] };
      const trlsMap: { [trlId: number]: TRL } = {};
      trls.forEach((trl: TRL) => (trlsMap[trl.id] = trl));
      return {
        ...(state || {}),
        entities: {
          ...(state.entities || {}),
          ...trlsMap,
        },
        entitiesLoading: false,
      };
    }
    case TRLAction.FETCH_TRL_LIST_ERROR: {
      const { error } = action.payload;
      return {
        ...(state || {}),
        error,
        entitiesLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default trlReducer;
