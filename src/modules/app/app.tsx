import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppResolver from './resolvers/app.resolver';
import { AppRoutePath } from '../../enums/app-route-path.enum';
import MainPage from './components/main/main';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import ProductPage from './components/product/product';

const App = () => {
  return (
    <div className='flex flex-col gap-2 h-full w-full'>
      <div className='h-16'>
        <Header />
      </div>
      <div className='flex w-full max-h-[calc(100%_-_5rem)] h-[calc(100%_-_5rem)] gap-2 px-2'>
        <Sidebar />
        <div className='flex max-h-full flex-grow flex-col bg-white rounded border border-gray-200'>
          <Routes>
            <Route path='/' element={<Navigate to={AppRoutePath.MAIN} />} />
            <Route path={AppRoutePath.MAIN} element={<MainPage />} />
            <Route path={AppRoutePath.PRODUCT} element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppResolver(App);
