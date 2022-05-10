import { StoreAction } from '../../models/core/store-action.model';
import { ProductAction } from '../types/product.type';
import { Product } from '../../models/main/product/product.model';

export const productFetchAction = (id: number): StoreAction<ProductAction> => ({
  type: ProductAction.FETCH_PRODUCT,
  payload: { id },
});

export const productFetchCompletedAction = (
  product: Product
): StoreAction<ProductAction> => ({
  type: ProductAction.FETCH_PRODUCT_COMPLETED,
  payload: { product },
});

export const productFetchErrorAction = (
  id: number,
  error: string
): StoreAction<ProductAction> => ({
  type: ProductAction.FETCH_PRODUCT_ERROR,
  payload: { id, error },
});

export const productUpdateAction = (
  id: number,
  data: Partial<Product>
): StoreAction<ProductAction> => ({
  type: ProductAction.UPDATE_PRODUCT,
  payload: { id, data },
});

export const productUpdateCompletedAction = (
  product: Product
): StoreAction<ProductAction> => ({
  type: ProductAction.UPDATE_PRODUCT_COMPLETED,
  payload: { product },
});

export const productUpdateErrorAction = (
  id: number,
  error: string
): StoreAction<ProductAction> => ({
  type: ProductAction.UPDATE_PRODUCT_ERROR,
  payload: { id, error },
});

export const setSelectedProductAction = (
  id: number
): StoreAction<ProductAction> => ({
  type: ProductAction.SET_SELECTED_PRODUCT,
  payload: { id },
});
