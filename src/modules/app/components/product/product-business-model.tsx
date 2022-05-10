import React, { ChangeEvent, useEffect, useState } from 'react';
import { Product } from '../../../../models/main/product/product.model';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { classNames } from '../../../../utils/classname.util';
import { ProductBusinessModel } from '../../../../models/main/product/product-business-model.model';

interface Props {
  product: Product;
  onUpdateProduct: (product: Product) => any;
}

const ProductBusinessModels = ({ product, onUpdateProduct }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [businessModels, setBusinessModels] = useState<{
    [businessModelId: number]: string;
  }>({});

  const toggleEditMode = () => setEditMode((state: boolean) => !state);

  const updateBusinessModelInput = (
    businessModelId: any,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessModels((state) => ({
      ...state,
      [businessModelId]: event.target.value,
    }));
  };

  const addBusinessModelInput = () => {
    const businessModelIds = Object.keys(businessModels).map(Number);
    const businessModelId =
      (businessModelIds.length ? Math.max(...businessModelIds) : 0) + 1;
    setBusinessModels((state) => ({
      ...state,
      [businessModelId]: '',
    }));
  };

  const removeBusinessModelInput = (businessModelId: number) => {
    setBusinessModels((state) => {
      const newState = { ...state };
      delete newState[businessModelId];
      return newState;
    });
  };

  const updateProductBusinessModel = () => {
    if (Object.values(businessModels).every(Boolean)) {
      const updateBusinessModels = Object.entries(businessModels).reduce(
        (partialResult, [businessModelId, businessModelName]) => {
          partialResult.push({
            id: +businessModelId,
            name: businessModelName,
          });
          return partialResult;
        },
        [] as ProductBusinessModel[]
      );
      const data: Product = {
        ...product,
        businessModels: updateBusinessModels,
      };
      onUpdateProduct(data);
    }
  };

  useEffect(() => {
    const _businessModels = Object.values(product.businessModels).reduce(
      (partialResult, currentValue) => {
        partialResult[currentValue.id] = currentValue.name;
        return partialResult;
      },
      {} as any
    );
    setBusinessModels(_businessModels);
    setEditMode(false);
  }, [product.businessModels]);

  return (
    <div className='flex flex-col gap-4 border border-gray-200 rounded p-4 shadow-lg'>
      <div className='flex justify-between'>
        <span className='text-sm md:text-base font-semibold'>
          Product Business Models
        </span>
        <FiEdit2 className='cursor-pointer mt-1' onClick={toggleEditMode} />
      </div>
      <div className='flex flex-col h-full'>
        {editMode ? (
          <div className='flex items-stretch flex-col h-full'>
            <div className='flex flex-col gap-2'>
              {Object.keys(businessModels).map((businessModelId: any) => (
                <div
                  key={businessModelId}
                  className='flex w-full gap-3 justify-between items-center'
                >
                  <input
                    type='text'
                    placeholder='Enter BusinessModel'
                    className='w-full px-2 border !rounded-sm outline-gray-400 border-gray-400 text-xs md:text-sm py-[0.125rem] focus:outline-1'
                    value={businessModels[businessModelId]}
                    onChange={(event) =>
                      updateBusinessModelInput(businessModelId, event)
                    }
                  />
                  <IoIosCloseCircleOutline
                    className='cursor-pointer text-xl md:text-2xl text-gray-500'
                    onClick={() => removeBusinessModelInput(businessModelId)}
                  />
                </div>
              ))}
            </div>
            <div className='flex-grow'></div>
            <div className='flex flex-col w-full gap-2 mt-4'>
              <button
                type='button'
                className='py-1 flex justify-center text-sm text-white rounded bg-green-500 hover:bg-green-600'
                onClick={addBusinessModelInput}
              >
                Add More
              </button>
              <button
                type='button'
                className={classNames(
                  'py-1 flex justify-center text-sm text-white rounded bg-indigo-500',
                  Object.values(businessModels).every(Boolean)
                    ? 'hover:bg-indigo-600'
                    : 'cursor-not-allowed opacity-50'
                )}
                onClick={updateProductBusinessModel}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <ul role='list' className='divide-y divide-gray-200'>
            {product.businessModels.map((businessModel) => (
              <li
                className='px-1 text-gray-600 text-sm md:text-base py-2 first-of-type:pt-0 last-of-type:pb-0'
                key={businessModel.id}
              >
                {businessModel.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductBusinessModels;
