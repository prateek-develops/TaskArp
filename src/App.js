// import React from 'react';
// import {Provider as ReduxProvider} from 'react-redux';
// import SplashScreen from './Screens/SplashScreen/SplashScreen';
// import {store} from './store';

// const App = () => {
//   return (
//     <ReduxProvider store={store}>
//       <SplashScreen />
//     </ReduxProvider>
//   );
// };

import BottomTabNavigator from './Navigation/TabNavigator';
import {MainStackNavigator} from './Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
// export default App;
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default App;
