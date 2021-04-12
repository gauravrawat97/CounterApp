/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './src/components/Login';
AppRegistry.registerComponent(appName, () => Login);
