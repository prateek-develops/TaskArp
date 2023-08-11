import About from '../Screens/About';
import Home from '../Screens/Home';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
