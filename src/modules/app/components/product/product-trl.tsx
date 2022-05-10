import React, { ChangeEvent, useEffect, useState } from 'react';
import { Product } from '../../../../models/main/product/product.model';
import { FiEdit2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { trlListSelector } from '../../../../redux/selectors/trl.selector';
import { TRL } from '../../../../models/main/trl/trl.model';
import { classNames } from '../../../../utils/classname.util';

interface Props {
  product: Product;
  onUpdateProduct: (product: Product) => any;
}

const ProductTRL = ({ product, onUpdateProduct }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [selectedTRLId, setSelectedTRLId] = useState<number>();
  const trls: TRL[] = useSelector(trlListSelector);

  const toggleEditMode = () => setEditMode((state: boolean) => !state);

  const onTRLChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTRLId(+event.target.value);
  };

  const updateProductTRL = () => {
    if (!selectedTRLId) {
      return;
    }
    const selectedTRL = trls.find((trl) => +trl.id === +selectedTRLId);
    if (selectedTRL) {
      const data: Product = {
        ...product,
        trl: selectedTRL,
      };
      onUpdateProduct(data);
    }
  };

  useEffect(() => {
    setSelectedTRLId(product.trl.id);
    setEditMode(false);
  }, [product.trl]);

  return (
    <div className='flex flex-col gap-4 border border-gray-200 rounded p-4 shadow-lg'>
      <div className='flex justify-between'>
        <span className='text-sm md:text-base font-semibold'>Product TRL</span>
        <FiEdit2 className='cursor-pointer mt-1' onClick={toggleEditMode} />
      </div>
      <div className='flex flex-col h-full'>
        {editMode ? (
          <div className='flex gap-4 flex-col h-full'>
            <select
              className='w-full p-2 border rounded bg-white outline-gray-400 border-gray-400 text-xs md:text-sm focus:outline-1'
              defaultValue={selectedTRLId}
              onChange={onTRLChange}
            >
              {trls.map((trl) => (
                <option key={trl.id} value={trl.id}>
                  {trl.name}
                </option>
              ))}
            </select>
            <button
              type='button'
              className={classNames(
                'py-1 flex justify-center text-sm text-white rounded bg-indigo-500',
                selectedTRLId !== +product.trl.id
                  ? 'hover:bg-indigo-600'
                  : 'cursor-not-allowed opacity-50'
              )}
              onClick={updateProductTRL}
            >
              Save
            </button>
          </div>
        ) : (
          <span className='text-gray-600 text-sm md:text-base'>
            {product.trl.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductTRL;
