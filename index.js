/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import Map from './src/components/MyMap';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Map);
