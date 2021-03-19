/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import OnBoarding from './src/components/OnBoarding';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => OnBoarding);
