/**
 * @format
 */
 import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigate from './src/components/Navigation';
AppRegistry.registerComponent(appName, () => Navigate);
