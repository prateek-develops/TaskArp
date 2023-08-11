import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import { PreLoginNavigator } from './PreLoginStack';
import DrawerNavigator from './DrawerNavigator';

const Navigator = ({homeReducer}) => {
  console.log(homeReducer?.isLoggedIn,'isAuthenticatedggg')
  return (
    <NavigationContainer>
      {homeReducer?.isLoggedIn ? <DrawerNavigator /> : <PreLoginNavigator />}
    </NavigationContainer>
  );
};


const mapStateToProps = state => {
  return {
    homeReducer: state?.homeReducer,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);

const styles = StyleSheet.create({});
