import * as React from 'react';
import { Text, View ,Image,StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  return (
      <SafeAreaView style={style.container}>
    <NavigationContainer>
      <Tab.Navigator
       tabBarOptions={{style:{height:150},
       labelStyle: {
        fontSize: 15,
        color:'black',
        marginBottom:60
      },
    }}
      >
        <Tab.Screen
        options={{
         tabBarIcon: ({focused}) => {
            if(focused)
                return(
                <Image
                  style={style.icon}
                  source={require('../assets/icons/active_home.png')}/>)
               else 
               return(
                <Image
                  style={style.inactive_icon}
                  source={require('../assets/icons/home.png')}/>)
            },
          }}
        name="Home" component={HomeScreen} />
        <Tab.Screen 
        options={{
            tabBarIcon: ({focused}) => {
               if(focused)
                   return(
                   <Image
                     style={style.icon}
                     source={require('../assets/icons/active_list.png')}/>)
                  else 
                  return(
                   <Image
                     style={style.inactive_icon}
                     source={require('../assets/icons/list.png')}/>)
               },
             }}
        name="Category" component={Dummy}/>
        <Tab.Screen
        options={{
            tabBarIcon: ({focused}) => {
               if(focused)
                   return(
                   <Image
                     style={style.icon}
                     source={require('../assets/icons/active_cart.png')}/>)
                  else 
                  return(
                   <Image
                     style={style.inactive_icon}
                     source={require('../assets/icons/cart.png')}/>)
               },
             }}
        name="My Cart" component={Dummy}/>
        <Tab.Screen 
        options={{
            tabBarIcon: ({focused}) => {
               if(focused)
                   return(
                   <Image
                     style={style.icon}
                     source={require('../assets/icons/active_wish.png')}/>)
                  else 
                  return(
                   <Image
                     style={style.inactive_icon}
                     source={require('../assets/icons/wish.png')}/>)
               },
             }}
        name="Wishlist" component={Dummy}/>
        <Tab.Screen 
        options={{
            tabBarIcon: ({focused}) => {
               if(focused)
                   return(
                   <Image
                     style={style.icon}
                     source={require('../assets/icons/active_user.png')}/>)
                  else 
                  return(
                   <Image
                     style={style.inactive_icon}
                     source={require('../assets/icons/user.png')}/>)
               },
             }}
        name="Account" component={Dummy}/>


      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}


const Dummy = ()=>{
    return null
} 

const HomeScreen = ()=>

    <Stack.Navigator>
        <Stack.Screen 
         options={{
           
            headerStyle: {
              height:80
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18,
              alignSelf: 'center'
            },
            
          }}
        component={Home} name="MEN CLOTHING"/>
    </Stack.Navigator>

const style = StyleSheet.create({
    container:
    {flex:1
    }
   
})