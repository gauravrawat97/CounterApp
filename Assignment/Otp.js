import React,{Component,PureComponent} from 'react'
import {View,Text, Button,StyleSheet, SafeAreaView, TextInput,Image, ScrollView, TouchableOpacity} from 'react-native'


class Otp extends Component{
    constructor(props)
    {
        super(props)
        this.state={otp:[]}

    }

    textChange = (content)=>{
       const numbers = content.split('')
       console.log(numbers)
       this.setState({otp:numbers})
    }

    btnPress = ()=>{
        const otp = this.state.otp.join('')
        alert(`Your OTP is ${otp}`)
    }
render()
{
    return(
        <>
        {console.log(this.state)}
        <SafeAreaView style={style.safearea}>
        <Text style={style.safe_head}>Log into Saavan</Text>
        </SafeAreaView>
        <View style={style.container}>
            <Text style={style.textheading}>Enter Your Code</Text>
            <TextInput style={style.input} autoFocus="true" maxLength={4} onChangeText={(content)=>this.textChange(content)} keyboardType='number-pad'/>
           
        <View style={style.otpContainer}>
            {[1,2,3,4].map((data,index)=>
                <Text style={style.otpBox}>{this.state.otp[index]}</Text>)}
        </View>
               
        <TouchableOpacity onPress={this.btnPress} style={style.btnContainer}>
                <Text style={style.btn}>Continue</Text>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
}

const style = StyleSheet.create({
safearea:{
    height:100,
    backgroundColor:'green'
},
safe_head:{
    alignSelf:'center',
    fontSize:20,
    paddingTop:20,
    color:'white',
    fontWeight:'bold'
},
container:{
    flex:1,
   
},
input:{
opacity:0
},

textheading:{
alignSelf:'center',
marginTop:80,
fontWeight:'bold',
fontSize:20
},
otpContainer:{
    
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:50,
    marginHorizontal:60

},
otpBox:{
    width:50,
    height:50,
    borderWidth:1,
    textAlign:'center',
    padding:10,
    fontSize:20,
    borderRadius:5,

},

btnContainer:{
    alignItems:'center',
    marginTop:80,
    marginHorizontal:50,
    borderColor:'green',
    borderWidth:1,
    paddingVertical:20
   
},
btn:{
    color:'green',
    fontSize:20
},

})

export default Otp;