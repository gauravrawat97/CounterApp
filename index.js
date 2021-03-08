/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dummy from './src/components/FlatList_Fetch';
AppRegistry.registerComponent(appName, () => Dummy);
