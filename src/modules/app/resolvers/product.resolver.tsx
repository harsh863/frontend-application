import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../shared/components/loading-page';
import { trlListLoadingSelector } from '../../../redux/selectors/trl.selector';
import { trlListFetchAction } from '../../../redux/actions/trl.action';
import { Product } from '../../../models/main/product/product.model';
import {
  selectedProductLoadingSelector,
  selectedProductSelector,
} from '../../../redux/selectors/product.selector';
import {
  productFetchAction,
  setSelectedProductAction,
} from '../../../redux/actions/product.action';

const DEFAULT_PRODUCT_ID = 6781;

const ProductResolver = (WrappedComponent: React.FC) =>
  function ProductResolverFactory(props: any) {
    const dispatch = useDispatch();

    const trlsLoading: boolean | undefined = useSelector(
      trlListLoadingSelector
    );
    const selectedProduct: Product | null = useSelector(
      selectedProductSelector
    );
    const selectedProductLoading: boolean | null = useSelector(
      selectedProductLoadingSelector
    );

    useEffect(() => {
      dispatch(trlListFetchAction());
      dispatch(setSelectedProductAction(DEFAULT_PRODUCT_ID));
      dispatch(productFetchAction(DEFAULT_PRODUCT_ID));
    }, []);

    return (
      <>
        {trlsLoading || (selectedProductLoading && !selectedProduct) ? (
          <LoadingPage />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };

export default ProductResolver;
