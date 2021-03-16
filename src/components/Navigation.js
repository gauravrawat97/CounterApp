import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './Register';
import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  componentDidMount() {
    this.userStatus();
  }

  async userStatus() {
    try {
      const userStatus = await AsyncStorage.getItem('userdata');
      if (userStatus !== null) {
        this.setState(JSON.parse(userStatus));
      }
      this.setState({isLoading: false});
    } catch (e) {}
  }
  render() {
    const Stack = createStackNavigator();
    if (this.state.isLoading) {
      return (
        <View style={style.loader}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.state.name !== undefined ? (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Register"
                component={Register}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Register"
                component={Register}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
