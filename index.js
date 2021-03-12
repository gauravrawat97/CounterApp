/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import Home from './src/components/Section';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Home);
