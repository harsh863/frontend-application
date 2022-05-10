import React from 'react';
import { useSelector } from 'react-redux';
import { selectedProductSelector } from '../../../../redux/selectors/product.selector';
import ProductBasicInfo from './product-basic-info';
import { AppConfig } from '../../../../models/main/app/app-config.model';
import { appConfigSelector } from '../../../../redux/selectors/app-config.selector';
import ProductUser from './product-user';
import ProductDetail from './product-detail';
import ProductResolver from '../../resolvers/product.resolver';
import { Product } from '../../../../models/main/product/product.model';

const ProductPage = () => {
  const appConfig: AppConfig = useSelector(appConfigSelector)!;
  const selectedProduct: Product = useSelector(selectedProductSelector)!;

  return (
    selectedProduct && (
      <div className='w-full h-full overflow-auto'>
        <div className='flex flex-col gap-y-4 gap-x-12 m-4 lg:flex-row'>
          <div className='flex flex-col gap-4 w-full lg:w-4/6 p-2'>
            <ProductBasicInfo product={selectedProduct} />
            <ProductDetail product={selectedProduct} />
          </div>
          <div className='w-full lg:w-2/6'>
            {appConfig.hasUserSection && (
              <ProductUser
                user={selectedProduct.user}
                company={selectedProduct.company}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductResolver(ProductPage);
