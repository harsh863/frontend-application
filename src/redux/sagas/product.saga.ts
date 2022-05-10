import { StoreAction } from '../../models/core/store-action.model';
import { ProductAction } from '../types/product.type';
import { Product } from '../../models/main/product/product.model';
import productService from '../../services/product.service';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  productFetchCompletedAction,
  productFetchErrorAction,
  productUpdateCompletedAction,
  productUpdateErrorAction,
} from '../actions/product.action';

function* fetchProduct({ payload }: StoreAction<ProductAction>) {
  const { id } = payload;
  try {
    const product: Product = yield call(productService.getProduct, id);
    yield put(productFetchCompletedAction(product));
  } catch (error: any) {
    yield put(productFetchErrorAction(id, error));
  }
}

function* updateProduct({ payload }: StoreAction<ProductAction>) {
  const { id, data } = payload;
  try {
    yield call(productService.updateProduct, id, data); // api not updating data
    yield put(productUpdateCompletedAction({ id, ...data }));
  } catch (error: any) {
    yield put(productUpdateErrorAction(id, error));
  }
}

function* productSaga() {
  yield all([
    takeLatest(ProductAction.FETCH_PRODUCT, fetchProduct),
    takeLatest(ProductAction.UPDATE_PRODUCT, updateProduct),
  ]);
}

export default productSaga;
