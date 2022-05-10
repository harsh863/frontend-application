import React from 'react';
import { User } from '../../../../models/main/user/user.model';
import { Company } from '../../../../models/main/product/product-company.model';

interface Props {
  user: User;
  company: Company;
}
const ProductUser = ({ user, company }: Props) => {
  return (
    <div className='flex flex-col items-center gap-1 border-2 shadow-lg rounded-lg border-gray-200 justify-center p-4'>
      <img
        src={user.profilePicture}
        alt=''
        className='w-20 h-20 border-2 border-gray-300 rounded-full mb-4'
      />
      <span className='font-medium sm:text-lg'>
        {user.firstName} {user?.lastName}
      </span>
      <span className='font-medium text-gray-600'>{company.name}</span>
    </div>
  );
};

export default ProductUser;
