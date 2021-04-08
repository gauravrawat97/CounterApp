import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Video from './Video';
import Audio from './Audio';
import AudioFile from './SingleAudio';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Audio Playlist Player" component={Audio} />
        <Stack.Screen name="Video Player" component={Video} />
        <Stack.Screen name="Audio Player" component={AudioFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
