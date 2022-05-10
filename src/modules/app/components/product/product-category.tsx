import React, { ChangeEvent, useEffect, useState } from 'react';
import { Product } from '../../../../models/main/product/product.model';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { classNames } from '../../../../utils/classname.util';
import { ProductCategory } from '../../../../models/main/product/product-category.model';

interface Props {
  product: Product;
  onUpdateProduct: (product: Product) => any;
}

const ProductCategories = ({ product, onUpdateProduct }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [categories, setCategories] = useState<{
    [categoryId: number]: string;
  }>({});

  const toggleEditMode = () => setEditMode((state: boolean) => !state);

  const updateCategoryInput = (
    categoryId: any,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCategories((state) => ({
      ...state,
      [categoryId]: event.target.value,
    }));
  };

  const addCategoryInput = () => {
    const categoryIds = Object.keys(categories).map(Number);
    const categoryId = (categoryIds.length ? Math.max(...categoryIds) : 0) + 1;
    setCategories((state) => ({
      ...state,
      [categoryId]: '',
    }));
  };

  const removeCategoryInput = (categoryId: number) => {
    setCategories((state) => {
      const newState = { ...state };
      delete newState[categoryId];
      return newState;
    });
  };

  const updateProductCategory = () => {
    if (Object.values(categories).every(Boolean)) {
      const updateCategories = Object.entries(categories).reduce(
        (partialResult, [categoryId, categoryName]) => {
          partialResult.push({
            id: +categoryId,
            name: categoryName,
          });
          return partialResult;
        },
        [] as ProductCategory[]
      );
      const data: Product = {
        ...product,
        categories: updateCategories,
      };
      onUpdateProduct(data);
    }
  };

  useEffect(() => {
    const _categories = Object.values(product.categories).reduce(
      (partialResult, currentValue) => {
        partialResult[currentValue.id] = currentValue.name;
        return partialResult;
      },
      {} as any
    );
    setCategories(_categories);
    setEditMode(false);
  }, [product.categories]);

  return (
    <div className='flex flex-col gap-4 border border-gray-200 rounded p-4 shadow-lg'>
      <div className='flex justify-between'>
        <span className='text-sm md:text-base font-semibold'>
          Product Categories
        </span>
        <FiEdit2 className='cursor-pointer mt-1' onClick={toggleEditMode} />
      </div>
      <div className='flex flex-col h-full'>
        {editMode ? (
          <div className='flex items-stretch flex-col h-full'>
            <div className='flex flex-col gap-2'>
              {Object.keys(categories).map((categoryId: any) => (
                <div
                  key={categoryId}
                  className='flex w-full gap-3 justify-between items-center'
                >
                  <input
                    type='text'
                    placeholder='Enter Category'
                    className='w-full px-2 border !rounded-sm outline-gray-400 border-gray-400 text-xs md:text-sm py-[0.125rem] focus:outline-1'
                    value={categories[categoryId]}
                    onChange={(event) => updateCategoryInput(categoryId, event)}
                  />
                  <IoIosCloseCircleOutline
                    className='cursor-pointer text-xl md:text-2xl text-gray-500'
                    onClick={() => removeCategoryInput(categoryId)}
                  />
                </div>
              ))}
            </div>
            <div className='flex-grow'></div>
            <div className='flex flex-col w-full gap-2 mt-4'>
              <button
                type='button'
                className='py-1 flex justify-center text-sm text-white rounded bg-green-500 hover:bg-green-600 mt-2'
                onClick={addCategoryInput}
              >
                Add More
              </button>
              <button
                type='button'
                className={classNames(
                  'py-1 flex justify-center text-sm text-white rounded bg-indigo-500',
                  Object.values(categories).every(Boolean)
                    ? 'hover:bg-indigo-600'
                    : 'cursor-not-allowed opacity-50'
                )}
                onClick={updateProductCategory}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <ul role='list' className='divide-y divide-gray-200'>
            {product.categories.map((category) => (
              <li
                className='px-1 text-gray-600 text-sm md:text-base py-2 first-of-type:pt-0 last-of-type:pb-0'
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCategories;
