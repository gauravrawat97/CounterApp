import * as React from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Clip from './Clip';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Home}
          tabBarOptions={{
            labelStyle: {
              fontSize: 15,
              color: 'black',
            },
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={style.icon}
                      source={require('../assets/icons/active_home.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={style.inactive_icon}
                      source={require('../assets/icons/home.png')}
                    />
                  );
                }
              },
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={style.icon}
                      source={require('../assets/icons/active_list.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={style.inactive_icon}
                      source={require('../assets/icons/list.png')}
                    />
                  );
                }
              },
            }}
            name="Clipboard"
            component={Clip}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {flex: 1},
});
