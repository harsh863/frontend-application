import { Map, Marker, ZoomControl } from 'pigeon-maps';
import React, { useCallback } from 'react';
import { Product } from '../../../../models/main/product/product.model';

interface Props {
  product: Product;
}

const ProductCompanyAddress = ({ product }: Props) => {
  const getCoordinates = useCallback(
    (): [number, number] => [
      +product.company.address.latitude,
      +product.company.address.longitude,
    ],
    [product.company.address]
  );

  const getAddress = useCallback(() => {
    const address = product.company.address;
    return `${address.house || ''} ${address.street || ''} ${
      address.city.name || ''
    }, ${address.state || ''} ${address.zipCode || ''}, ${
      address.country.name || ''
    }`;
  }, [product.company.address]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='rounded-lg shadow-lg overflow-hidden'>
        <Map height={400} defaultCenter={getCoordinates()} defaultZoom={15}>
          <ZoomControl />
          <Marker color='red' width={25} anchor={getCoordinates()} />
        </Map>
      </div>
      <span className='font-medium text-center'>{getAddress()}</span>
    </div>
  );
};

export default ProductCompanyAddress;
