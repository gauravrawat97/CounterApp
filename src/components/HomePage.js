import React,{useEffect,useState} from 'react';
import {View,Text,SafeAreaView, Button, TextInput,StyleSheet, TouchableHighlight,Image} from 'react-native'

export default function HomePage({navigation})
{
    const [name,setName]= useState("")
    return(
        <>
       <SafeAreaView/>
           <View style={style.container}>
               <Text style={style.text}>Hey Type something to appear on next screen!</Text>
               <TextInput style={style.input} onChangeText={text=>setName(text)}/>
               <TouchableHighlight style={style.btnContainer} onPress={()=>navigation.navigate('nextPage',{content:name})}>
               <Text style={style.btntext}>Next</Text>
               </TouchableHighlight>
           </View>
       <SafeAreaView/>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        marginTop:20
    },
    text:{
        marginTop:10,
        alignSelf:'center'
    },
    input:{
        marginTop:20,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:5,
       height:40,
       borderRadius:8,
       fontSize:20,
       color:'blue'
    },
    btnContainer:{
        marginTop:10,
        padding:10,
        marginHorizontal:10,
        borderRadius:10,
        alignSelf:'flex-end',
        width:100,
        borderColor:'black',
        borderWidth:1
    },
   btntext:{
       textAlign:'center',
       fontSize:15
    },

})