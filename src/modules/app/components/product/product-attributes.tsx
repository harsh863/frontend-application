import React from 'react';
import { Product } from '../../../../models/main/product/product.model';
import ProductCategories from './product-category';
import ProductBusinessModels from './product-business-model';
import ProductTRL from './product-trl';

interface Props {
  product: Product;
  onUpdateProduct: (product: Product) => any;
}

const ProductAttributes = ({ product, onUpdateProduct }: Props) => {
  return (
    <div className='flex gap-4 grid grid-cols-1 w-full'>
      <ProductCategories product={product} onUpdateProduct={onUpdateProduct} />
      <ProductBusinessModels
        product={product}
        onUpdateProduct={onUpdateProduct}
      />
      <ProductTRL product={product} onUpdateProduct={onUpdateProduct} />
    </div>
  );
};

export default ProductAttributes;
