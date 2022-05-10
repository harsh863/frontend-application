import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutePath } from '../../../../enums/app-route-path.enum';
import { classNames } from '../../../../utils/classname.util';

const Sidebar = () => {
  const routes = [
    {
      name: 'Main',
      path: AppRoutePath.MAIN,
    },
    {
      name: 'Product',
      path: AppRoutePath.PRODUCT,
    },
  ];

  return (
    <div className='w-16 min-w-[4rem] md:w-64 md:min-w-[16rem] flex flex-col border border-gray-200 rounded pt-2 bg-white overflow-y-auto transition-all delay-100'>
      <div className='flex-grow flex flex-col'>
        <nav className='flex-1 px-2 bg-white space-y-1' aria-label='Sidebar'>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                classNames(
                  isActive ? 'bg-gray-100' : 'hover:bg-gray-50',
                  'group flex gap-4 items-center px-2 py-2 rounded-md'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={classNames(
                      isActive
                        ? 'text-gray-700 border-gray-700'
                        : 'text-gray-500 group-hover:text-gray-600 group-hover:border-gray-600',
                      'w-8 h-8 flex items-center justify-center rounded-full border-2 font-medium transition-all delay-100'
                    )}
                  >
                    {route.name.charAt(0)}
                  </span>
                  <span
                    className={classNames(
                      isActive
                        ? 'text-gray-700'
                        : 'text-gray-500 group-hover:text-gray-600',
                      'font-medium transition-all hidden md:flex delay-100'
                    )}
                  >
                    {route.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
