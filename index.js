/**
 * @format
 */

import App from './src/App';
import {AppRegistry} from 'react-native';
import SignUp from './src/Screens/SignUp/SignUp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SignUp);
