import { lazy, Suspense } from 'react';

const LazyMyInformation = lazy(() => import('./MyInformation'));

const MyInformation = (props) => (
  <Suspense fallback={null}>
    <LazyMyInformation {...props} />
  </Suspense>
);

export default MyInformation;
