import * as React from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Account from './Account';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Account'}
          tabBarOptions={{
            style: {height: 80},
            labelStyle: {
              fontSize: 12,
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
            component={HomeScreen}
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
            name="Category"
            component={Dummy}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={style.icon}
                      source={require('../assets/icons/active_cart.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={style.inactive_icon}
                      source={require('../assets/icons/cart.png')}
                    />
                  );
                }
              },
            }}
            name="My Cart"
            component={Dummy}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={style.icon}
                      source={require('../assets/icons/active_wish.png')}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={style.inactive_icon}
                      source={require('../assets/icons/wish.png')}
                    />
                  );
                }
              },
            }}
            name="Wishlist"
            component={Dummy}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused, size}) => {
                if (focused) {
                  return <Icon name="person" size={size} color="#FFD700" />;
                } else {
                  return <Icon name="person" size={size} color="grey" />;
                }
              },
            }}
            name="Account"
            component={Account}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Dummy = () => {
  return null;
};

const HomeScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          alignSelf: 'center',
        },
      }}
      component={Home}
      name="MEN CLOTHING"
    />
  </Stack.Navigator>
);

const style = StyleSheet.create({
  container: {flex: 1},
});
