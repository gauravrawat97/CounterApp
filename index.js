/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Navigation from './src/components/Navigation';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Navigation);
