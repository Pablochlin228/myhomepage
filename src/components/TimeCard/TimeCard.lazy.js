import { lazy, Suspense } from 'react';

const LazyTimeCard = lazy(() => import('./TimeCard'));

const TimeCard = (props) => (
  <Suspense fallback={null}>
    <LazyTimeCard {...props} />
  </Suspense>
);

export default TimeCard;
