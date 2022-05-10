import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface Props {
  message?: string;
  size?: number;
}

const LoadingPage = ({ message, size }: Props) => {
  return (
    <div className='h-full w-full flex  flex-col gap-6 justify-center items-center'>
      <FaSpinner className='animate-spin' size={size || 32} />
      {message && <span className='text-lg font-medium'>{message}</span>}
    </div>
  );
};

export default LoadingPage;
