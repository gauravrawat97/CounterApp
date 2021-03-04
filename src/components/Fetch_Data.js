import React,{Component,PureComponent} from 'react'
import {View,Text, Button,StyleSheet, SafeAreaView, TextInput,Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'

class Fetch_Data extends Component{
    constructor(props)
    {
        super(props)
        this.state={load:true,content:[],fetchBtn:true,loadMore:false}

    }

   

    fetchData=(id)=>
    {

       this.setState({load:false})
       setTimeout(async ()=>
       {
       if(id)
       {
           console.log("I AM IN")
        const response = await fetch('https://reqres.in/api/users/?page=2')
        const content = await response.json()
        this.setState({content:[...this.state.content,...content.data],loadMore:false})
       }
       else
       {
        const response = await fetch('https://reqres.in/api/users')
        const content = await response.json()
        this.setState({content:content.data,loadMore:true,fetchBtn:false})
       }

       this.setState({load:true})
    },5000)
    }

render()
{
    const {content,load,loadMore,fetchBtn} = this.state
    return(
        <>
        <SafeAreaView style={style.safearea}>
        <Text style={style.heading}>Fetching Data</Text>
        </SafeAreaView>
       
        <View style={style.mainContainer}>
          {fetchBtn?(<TouchableOpacity style={style.btnContainer} onPress={()=>this.fetchData()}>
              <Text style={style.text}>Fetch Data</Text>
          </TouchableOpacity>):(null)}

    {load&&(<ScrollView style={style.scroll}>
        <View style={style.contentContainer}>
        {content.map((data)=>
            
           <View key={data.id} style={style.content}>
               <Image style={style.img} source={{uri:data.avatar}}></Image>
            <Text style={style.contentData}>
                {`Email Address: ${data.email}`}
            </Text>
            <Text style={style.contentData}>
                {`Full Name: ${data.first_name} ${data.last_name}`}
            </Text>
           
            </View>
           
        )}
        </View>
        </ScrollView>)}

        {!load&&( <ActivityIndicator size="large" color="#ff1a1a" />)}
        {loadMore?(<TouchableOpacity style={style.btnContainer} onPress={()=>this.fetchData(1)}>
            <Text>View More</Text>
        </TouchableOpacity>):(null)}
       
         
        </View>
        <SafeAreaView/>
        </>
    )
}
}

const style = StyleSheet.create({
    safearea:{
        height:120,
        backgroundColor:'green',
    },
   
    container: {
        flex: 1,
    }, 
    mainContainer:{
        flex:1,
    },
    heading:{
          fontSize:30,
          alignSelf:'center',
         marginTop:30
        },
    btnContainer:{
        borderColor:'green',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        marginTop:50,
        padding:10
        },
    scroll:{
        marginVertical:30
    },
    text:{
        fontSize:20
    },
    contentContainer:{
        paddingHorizontal:10,
        marginTop:50
    },
    content:{
        marginVertical:20,
        alignSelf:'center'

    },
    contentData:{
        fontWeight:'bold',
        fontSize:15,
    }
    ,

    img:{
          width:80,
          height:60,
          borderRadius:10,
          alignSelf:'center'
    }
})

export default Fetch_Data;