/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Counter from './ClickCounter'
AppRegistry.registerComponent(appName, () => Counter);
