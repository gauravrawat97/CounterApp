import React from 'react';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'

export default function NextPage({navigation,route})
{
    
    return(
        <>
       <SafeAreaView/>
           <View style={style.container}>
            <Text style={style.text}>You sent <Text style={style.impText}>{route.params.content}</Text></Text>
            <Text style={style.text}>Your text have been set as header!</Text>
            </View>
       <SafeAreaView/>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:5
    },
    text:{
        marginTop:20,
        alignSelf:'center'
    },
    impText:{
        color:'red',
        fontWeight:'bold',
        fontSize:20
    }
    
})