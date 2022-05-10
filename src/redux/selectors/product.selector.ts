import { AppState } from '../reducers';
import { createSelector } from 'reselect';
import { ProductState } from '../reducers/product.reducer';

const productStateSelector = (state: AppState) => state.products;

const productEntitiesSelector = createSelector(
  [productStateSelector],
  (productState: ProductState) => productState.entities
);

const productEntityLoadingSelector = createSelector(
  [productStateSelector],
  (productState: ProductState) => productState.entityLoading
);

export const selectedProductIdSelector = createSelector(
  [productStateSelector],
  (productState: ProductState) => productState.selectedProductId
);

export const selectedProductSelector = createSelector(
  [selectedProductIdSelector, productEntitiesSelector],
  (
    selectedProductId: number | undefined,
    productEntities: ProductState['entities']
  ) => productEntities?.[selectedProductId!] || null
);

export const selectedProductLoadingSelector = createSelector(
  [selectedProductIdSelector, productEntityLoadingSelector],
  (
    selectedProductId: number | undefined,
    productEntityLoading: ProductState['entityLoading']
  ) => productEntityLoading?.[selectedProductId!] || null
);
