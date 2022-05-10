import { StoreState } from '../../models/core/store-state.model';
import { Product } from '../../models/main/product/product.model';
import { StoreAction } from '../../models/core/store-action.model';
import { ProductAction } from '../types/product.type';

export interface ProductState extends StoreState<Product> {
  selectedProductId?: number;
}

const initialState: ProductState = {
  entities: {},
  entityLoading: {},
};

const productReducer = (
  state: ProductState = initialState,
  action: StoreAction<ProductAction>
): ProductState => {
  switch (action.type) {
    case ProductAction.FETCH_PRODUCT: {
      const { id } = action.payload;
      return {
        ...(state || {}),
        entityLoading: {
          ...(state.entityLoading || {}),
          [id]: true,
        },
      };
    }
    case ProductAction.FETCH_PRODUCT_COMPLETED:
    case ProductAction.UPDATE_PRODUCT_COMPLETED: {
      const { product } = action.payload as { product: Product };
      const productId = product.id;
      return {
        ...(state || {}),
        entities: {
          ...(state.entities || {}),
          [productId]: {
            ...(state.entities?.[productId] || {}),
            ...product,
          },
        },
        entityLoading: {
          ...(state.entityLoading || {}),
          [productId]: false,
        },
      };
    }
    case ProductAction.FETCH_PRODUCT_ERROR:
    case ProductAction.UPDATE_PRODUCT_ERROR: {
      const { id, error } = action.payload;
      return {
        ...(state || {}),
        error,
        entityLoading: {
          ...(state.entityLoading || {}),
          [id]: false,
        },
      };
    }
    case ProductAction.SET_SELECTED_PRODUCT: {
      const { id } = action.payload;
      return {
        ...(state || {}),
        selectedProductId: id,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
