import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import {store} from './store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SplashScreen />
    </ReduxProvider>
  );
};

export default App;
