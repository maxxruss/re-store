import React from "react";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import {
  BookstoreServiceProvider,
  BookstoreServiceConsumer,
} from "../boostore-service-context";

const App = () => {
  return (
    <div>
      <ErrorBoundry>
        <Spinner />
      </ErrorBoundry>
    </div>
  );
};

export default App;
