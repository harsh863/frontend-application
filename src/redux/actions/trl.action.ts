import { StoreAction } from '../../models/core/store-action.model';
import { TRLAction } from '../types/trl.type';
import { TRL } from '../../models/main/trl/trl.model';

export const trlListFetchAction = (): StoreAction<TRLAction> => ({
  type: TRLAction.FETCH_TRL_LIST,
});

export const trlListFetchCompletedAction = (
  trls: TRL[]
): StoreAction<TRLAction> => ({
  type: TRLAction.FETCH_TRL_LIST_COMPLETED,
  payload: { trls },
});

export const trlListFetchErrorAction = (
  error: string
): StoreAction<TRLAction> => ({
  type: TRLAction.FETCH_TRL_LIST_ERROR,
  payload: { error },
});
