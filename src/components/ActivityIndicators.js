import React,{Component,PureComponent} from 'react'
import {View,Text, Button,StyleSheet, SafeAreaView, TextInput,Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import DummyImage from "../assets/dragon.jpeg"

class ActivityIndicators extends Component{
    constructor(props)
    {
        super(props)
        this.state={load:false}

    }

   componentDidMount()
   {
    setTimeout(()=>this.setState({load:true}),6000)
   }

render()
{
    if(this.state.load)
    return(
        <>
        <SafeAreaView/>
        <View style={style.mainContainer}>
          <Image source={DummyImage} style={style.image}/>
        </View>
        
        </>
    )
    else
    return(<View style={[style.container, style.horizontal]}>
        <ActivityIndicator size="large" color="#ff1a1a" />
      </View>)
}
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      },
      mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      image:{
          width:300,
          height:400,
          borderRadius:10,
         
      }
})

export default ActivityIndicators;