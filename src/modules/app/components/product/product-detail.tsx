import React, { useState } from 'react';
import { classNames } from '../../../../utils/classname.util';
import { Product } from '../../../../models/main/product/product.model';
import ProductDescription from './product-description';
import ProductAttributes from './product-attributes';
import { useDispatch } from 'react-redux';
import { productUpdateAction } from '../../../../redux/actions/product.action';

interface Props {
  product: Product;
}
const ProductDetail = ({ product }: Props) => {
  const tabs = [
    { name: 'Description', value: 1 },
    { name: 'Attributes', value: 2 },
  ];

  const dispatch = useDispatch();
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].value);

  const changeActiveTab = (tabId: number) => {
    setSelectedTabId(tabId);
  };

  const onProductUpdate = (data: Product) => {
    const { id, ...rest } = data;
    dispatch(productUpdateAction(id, rest));
  };

  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='flex w-full'>
        {tabs.map((tab) => (
          <div
            role='button'
            key={tab.value}
            className={classNames(
              tab.value === selectedTabId
                ? 'border-indigo-500 text-indigo-600'
                : 'text-gray-700 border-gray-300',
              'w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer'
            )}
            onClick={() => changeActiveTab(tab.value)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className='flex w-full'>
        <div
          className={classNames(selectedTabId !== 1 ? 'hidden' : '', 'w-full')}
        >
          <ProductDescription
            product={product}
            onUpdateProduct={onProductUpdate}
          />
        </div>
        <div
          className={classNames(selectedTabId !== 2 ? 'hidden' : '', 'w-full')}
        >
          <ProductAttributes
            product={product}
            onUpdateProduct={onProductUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
