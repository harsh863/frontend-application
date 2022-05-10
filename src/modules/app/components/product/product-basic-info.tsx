import { Product } from '../../../../models/main/product/product.model';
import React from 'react';

interface Props {
  product: Product;
}
const ProductBasicInfo = ({ product }: Props) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img
        src={product.picture}
        alt=''
        className='drop-shadow-2xl w-4/5 sm:w-3/5 lg:w-2/5'
      />
      <span className='text-lg sm:text-2xl mt-6 font-semibold'>
        {product.name}
      </span>
      <em className='text-base text-gray-400 sm:text-lg'>
        {product.type?.name}{' '}
      </em>
    </div>
  );
};

export default ProductBasicInfo;
