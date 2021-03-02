import React,{Component,PureComponent} from 'react'
import {View,Text, Button,StyleSheet, SafeAreaView, TextInput,Image, ScrollView} from 'react-native'
import Back from "./images/back.png"
import Bookmark from "./images/bookmark.png"
import Dragon from './images/dragon.jpeg'
import Screens from './images/screens.jpeg'

class ProductComponent extends Component{
render()
{
    const genre = ['Adventure','Family','Fantasy'] 
    return(
        <>
        <SafeAreaView/>
        <ScrollView>
        <View style={style.header}>
            <Image source={Back}></Image>
            <Text style={style.text}>Product Details</Text>
            <Image source={Bookmark}></Image>
        </View>

        <View style={style.container}>
        <Image source={Dragon} style={style.image}/>
        <Text style={style.heading}>How To Train Your Dragon The Hidden World</Text>
        <Text style={style.subhead}>Part III</Text>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
        {genre.map(content=><Text style={style.genre}>{content}</Text>)}
        </View>
        
        </View>

        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginVertical:50}}/>
        

        
        <View style={{flex:1}}>
       <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
       <Text>Year</Text>
       <Text>Country</Text>
       <Text>Length</Text>
       </View>

       <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
       <Text style={style.text}>2019</Text>
        <Text style={style.text}>USA</Text>
        <Text style={style.text}>112 min</Text>
       </View>
        </View>

        
       


         {/* About Movie */}
         <View style={style.content_container}>
            <Text style={[style.about,style.text]}>About Movie</Text>
            <Text style={style.content}>When Hiccup discovers Toothless isn't the only Night Fury, he must seek "The Hidden World", a secret Dragon utopia before a hired tyrant named Grimmel finds it first.</Text>
       
            <Text style={[style.about,style.text,{marginVertical:20}]}>Screenshots</Text>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={Screens} style={style.screenshot}/>
            <Image source={Screens} style={style.screenshot}/>
        </View>

        <View style={{marginVertical:20}}>
        <Button title="Buy Ticket"/>
        </View>
        </View>
      

        </ScrollView>
        </>
    )
}
}

const style = StyleSheet.create({
header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:20,
    backgroundColor:'#FFFFFF'
},
container:{
    flex:4,
    backgroundColor:'#F8F8FF',
    paddingHorizontal:50,
    paddingTop:40,

},
image:{
    height:500,
    width:'100%',
    borderRadius:10

},
heading:{
    alignSelf:'center',
    fontSize:20,
    marginTop:50,
    paddingHorizontal:20
},
subhead:{
    alignSelf:'center',
    fontSize:18,
    marginTop:10,
    marginBottom:20
},
genre:{
    backgroundColor:'#1569C7',
    padding:10,
    borderRadius:50,
    color:'white'
},
text:{
    fontSize:20
},
content_container:{
    flex:1,
    paddingHorizontal:20,
    marginTop:50
},
about:{
    fontWeight:'bold',

},
content:{
    marginTop:20,
    fontSize:15
},
screenshot:{
    width:160,
    height:120,
    borderRadius:5

},

})

export default ProductComponent;