import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../pathes';

const Root: FC = () => {
  return <Navigate to={DASHBOARD_PATH} replace />;
};

export { Root };
