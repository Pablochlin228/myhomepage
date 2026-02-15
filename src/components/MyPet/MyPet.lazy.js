import { lazy, Suspense } from 'react';

const LazyMyPet = lazy(() => import('./MyPet'));

const MyPet = (props) => (
  <Suspense fallback={null}>
    <LazyMyPet {...props} />
  </Suspense>
);

export default MyPet;
