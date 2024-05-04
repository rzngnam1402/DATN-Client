import React, { Suspense } from "react";
import Spinner from "../../../../views/spinner/Spinner";

const Loadable = (Component) => {
  const LoadableComponent = (props) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );

  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;

  return LoadableComponent;
};

export default Loadable;
