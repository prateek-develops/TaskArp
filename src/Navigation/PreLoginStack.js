import About from '../Screens/About';
import Home from '../Screens/Home';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginFun from '../Screens/Login/Login'
import signUpFun from '../Screens/SignUp/SignUp'

const Stack = createStackNavigator();

const PreLoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={signUpFun} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Login" component={LoginFun} options={{
        headerShown:false
      }}/>
    </Stack.Navigator>
  );
};

export {PreLoginNavigator};
