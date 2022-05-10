import React from 'react';
import { AppConfig } from '../../../../models/main/app/app-config.model';
import { useSelector } from 'react-redux';
import { appConfigSelector } from '../../../../redux/selectors/app-config.selector';

const Header = () => {
  const appConfig: AppConfig = useSelector(appConfigSelector)!;

  return (
    <div
      className='w-full h-full px-4 flex items-center'
      style={{ backgroundColor: appConfig?.mainColor }}
    >
      <img src={appConfig?.logo} alt='' className='h-[calc(100%_-_32px)]' />
    </div>
  );
};

export default Header;
