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
import CheckBox from '../../components/CheckBox';
import {connect, useDispatch} from 'react-redux';
import {authAction, loginAction} from '../../redux/Home.slice';

const LoginScreen = ({onLoginAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const dispatch = useDispatch();
  const LoginFun = () => {
    if (!email) {
      Alert.alert('Please enter your email.');
    } else if (!emailRegex.test(email)) {
      Alert.alert('Invalid email.');
    } else if (!password) {
      Alert.alert('Please enter your password.');
    } else if (!passwordRegex.test(password)) {
      Alert.alert('Password should be minimum 8 characters and 1 uppercase.');
    } else {
      const formData = {
        email: email,
        password: password,
      };
      onLoginAction(formData).then(res => {
        if (res?.type?.includes('rejected')) {
          Alert.alert(res.payload);
        }
        if (res?.type?.includes('fulfilled')) {
          Alert.alert('Login Successfully');
        }
        setIsChecked(false);
      });
    }
  };

  return (
    <View style={styles.container}>
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
      <CheckBox
        label="I accept the terms & conditions"
        value={isChecked}
        onValueChange={setIsChecked}
      />
      <Text>Checkbox is {isChecked ? 'checked' : 'unchecked'}</Text>
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.loginButton}
        disabled={!isChecked}
        onPress={LoginFun}>
        <Text style={styles.loginButtonText}>Login</Text>
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
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
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
    width: '90%',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});



const mapStateToProps = state => {
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoginAction: params => dispatch(loginAction(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
