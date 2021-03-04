/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Fetch from './src/components/Fetch_Data';
AppRegistry.registerComponent(appName, () => Fetch);
