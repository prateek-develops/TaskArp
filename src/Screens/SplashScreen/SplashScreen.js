import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const SplashScreen = () => {
  const [isSplashEnd, setIsSplashEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashEnd(true);
    }, 3000);
  }, []);

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={'yellow'} barStyle="dark-content" />
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 22}}>
        ulmo
      </Text>
    </View>
  )

};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
