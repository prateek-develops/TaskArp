import {ContactStackNavigator, MainStackNavigator} from './StackNavigator';

import About from '../Screens/About';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
