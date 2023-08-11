import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import Navigator from './Navigation/Navigator';

const App = () => {
  return (
    <ReduxProvider store={store}>
     <Navigator />
    </ReduxProvider>
  );
};

export default App;
