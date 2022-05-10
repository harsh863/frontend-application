import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  appConfigLoadingSelector,
  appConfigSelector,
} from '../../../redux/selectors/app-config.selector';
import LoadingPage from '../../shared/components/loading-page';
import { appConfigFetchAction } from '../../../redux/actions/app-config.action';
import { APP_ID } from '../../../constants/environment.constant';
import { AppConfig } from '../../../models/main/app/app-config.model';

const AppResolver = (WrappedComponent: React.FC) =>
  function AppResolverFactory(props: any) {
    const dispatch = useDispatch();

    const appConfig: AppConfig | undefined = useSelector(appConfigSelector);
    const appConfigLoading: boolean = useSelector(appConfigLoadingSelector);

    useEffect(() => {
      dispatch(appConfigFetchAction(APP_ID));
    }, []);

    return (
      <>
        {appConfigLoading && !appConfig ? (
          <LoadingPage message='Please wait while we load data from our servers' />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };

export default AppResolver;
