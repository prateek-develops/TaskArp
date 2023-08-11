import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const signUpFun = () => {
    if (!email) {
      Alert.alert('Please enter your email.');
    } else if (!emailRegex.test(email)) {
      Alert.alert('Invalid email.');
    } else if (!password) {
      Alert.alert('Please enter your password.');
    } else if (!passwordRegex.test(password)) {
      Alert.alert(
        'Password should be minimum 8 characters and 1 uppercase and 1 number.',
      );
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('User account created Successfully.');
          navigation.navigate('Login');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: '700', marginVertical: 20}}>
        Sign Up Form
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      <TouchableOpacity style={styles.loginButton} onPress={signUpFun}>
        <Text style={styles.loginButtonText}>SignUp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Log in </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '90%',
    // height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    padding: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '90%',
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SignUp;
