/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';
import Counter from './src/components/ClickCounter'
AppRegistry.registerComponent(appName, () => Counter);
