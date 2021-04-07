/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Emp from './src/components/EmployeeHome';
AppRegistry.registerComponent(appName, () => Emp);
