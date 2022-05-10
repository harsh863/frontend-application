import { AppState } from '../reducers';
import { createSelector } from 'reselect';
import { TRLState } from '../reducers/trl.reducer';

const trlSelectorStateSelector = (state: AppState) => state.trls;

export const trlListSelector = createSelector(
  [trlSelectorStateSelector],
  (trlState: TRLState) => Object.values(trlState.entities)
);

export const trlListLoadingSelector = createSelector(
  [trlSelectorStateSelector],
  (trlState: TRLState) => trlState.entitiesLoading
);
