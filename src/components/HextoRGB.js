import React,{Component,PureComponent} from 'react'
import {View,Text, Button,StyleSheet, SafeAreaView, TextInput,Image, ScrollView, TouchableOpacity} from 'react-native'


class HexToRGB extends Component{
    constructor(props)
    {
        super(props)
        this.state={hexcode:'',rgb:''}

    }
    changeTxt = (content)=>{
      this.setState({hexcode:content})
    }
   
    btnPress = ()=>{
      const hex = this.state.hexcode
    //  console.log(['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0]);
    if(hex.length != 6){
        this.setState({rgb:'',hexcode:''})
        return alert("HexCode InValid")
    }

    var aRgbHex = hex.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    this.setState({rgb:aRgb.toString()})
}
render()
{
    return(
        <>
        <SafeAreaView/>
        <View style={style.container}>
            <TextInput style={style.input} value={this.state.hexcode} onChangeText={this.changeTxt} autoFocus={true}/>
           
        <View style={[style.rgbContainer,{backgroundColor:`rgb(${this.state.rgb})`}]}>
           <Text style={style.text}>{this.state.rgb}</Text>
        </View>
               
        <TouchableOpacity onPress={this.btnPress} style={style.btnContainer}>
                <Text style={style.btn}>Verify</Text>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
}

const style = StyleSheet.create({

container:{
    flex:1,

},
input:{
borderBottomColor:'blue',
borderRadius:1,
padding:10,
alignSelf:'center',
marginTop:50,
borderWidth:1,
width:200,
borderRadius:10
},
rgbContainer:{
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    height:100
},
text:{
    fontSize:30
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

export default HexToRGB;