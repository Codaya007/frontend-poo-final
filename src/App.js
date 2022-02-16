import React from "react";
// redux config
import { Provider } from 'react-redux';
import store from './data/store'
// routes config
import AppRoutes from './app.routes';
import { useEffect } from 'react';
import { loadUser } from './data/actions';

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store} >
        <AppRoutes />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
