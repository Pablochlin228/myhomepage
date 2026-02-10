import { lazy, Suspense } from 'react';

const LazyMyFilm = lazy(() => import('./MyFilm'));

const MyFilm = (props) => (
  <Suspense fallback={null}>
    <LazyMyFilm {...props} />
  </Suspense>
);

export default MyFilm;
