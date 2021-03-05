import React,{useEffect,useState} from 'react';
import {View,Text,SafeAreaView, Button,Image, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Hex from "./HextoRGB"
import HomePage from "./HomePage"
import NextPage from "./NextPage"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const Routes = ({})=>{

    return(
        <NavigationContainer>    
        <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
                <Stack.Screen name="nextPage" component={NextPage} 
                    options={
                        ({ route }) => ({ title: route.params.content })
                        }/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}


function Home()
{
    return(
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            labelStyle:{fontSize:15}
          }}
        >
        <Tab.Screen options={{ 
            tabBarIcon: ({focused}) => {
            if(focused)
                return(
                <Image
                  style={style.icon}
                  source={require('../assets/active_home.png')}/>)
               else 
               return(
                <Image
                  style={style.icon}
                  source={require('../assets/inactive_home.png')}/>)
            },
          }}
            name="Home" component={HomePage}></Tab.Screen>
            
        <Tab.Screen options={{
            tabBarIcon: ({size,focused,color}) => {
                if(focused)
                  return(
                    <Image
                      style={style.icon}
                      source={require('../assets/active_app.png')}/>)
                else 
                   return(
                    <Image
                      style={style.icon}
                      source={require('../assets/inactive_app.png')}/>)
                },
              }}
            name="Apps" component={Hex}></Tab.Screen>

        </Tab.Navigator>
        
    )
}

const style = StyleSheet.create({
    icon:{resizeMode:'cover'}
})