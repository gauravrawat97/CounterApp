/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import React from 'react';
import mystore from './src/components/store/store';

import {Provider} from 'mobx-react';
import ToDoList from './src/components/ToDoList';

const App = () => {
  return (
    <Provider store={mystore}>
      <ToDoList />
    </Provider>
  );
};

AppRegistry.registerComponent('AwesomeProject', () => App);
