import React from 'react';
// import P5Wrapper from 'react-p5-wrapper';
import Sketch from './sketch';

const ClientSideOnlyLazy = React.lazy(() => import('react-p5-wrapper'));
const SketchWrapper = () => {
  const isSSR = typeof window === 'undefined';

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy sketch={Sketch} />
        </React.Suspense>
      )}
    </>
  );
};

export default SketchWrapper;
