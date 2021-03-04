import React,{Component,PureComponent} from 'react'
import {View,Text, Button} from 'react-native'
import Child from './DisplayCounter'

class ClickCounter extends Component{
    constructor(props)
    {
        super(props)
        this.state={clicks:0}
        console.log("Parent Constructor Method Called");

    }


    static getDerivedStateFromProps(props,state)
    {
        console.log(`Parent getDerivedStateFromProps called`)
        console.log(props)
        console.log(state)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(`Parent shouldComponentUpdate called`)
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log(`Parent getSnapshotBeforeUpdate called`)
        console.log(prevProps)
        console.log(prevState)
    }

    componentDidMount()
    {
        console.log(`Parent componentDidMount called`)
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log(`Parent componentDidUpdate `)
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
    }
    componentWillUnmount(){
        console.log(`Parent componentWillUnmount called`)
    }



    increaseCount=()=>
    {
        this.setState((prevState)=>({clicks:prevState.clicks+1}))

    }

    decreaseCount=()=>
    {
    if(this.state.clicks<=0)
        alert("Cannot go below 0")
    else
        this.setState((prevState)=>({clicks:prevState.clicks-1}))
    }

    resetCount=()=>
    {
        this.setState({clicks:0})
    }

render()
{
    console.log("Parent Render Method Called");   
    return(
        <View style={{flex:1}}>
            <View  style={{flex:1,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
           <Button title="Increase Font Size" onPress={this.increaseCount}/>
           <Button title="Decrease Font Size" onPress={this.decreaseCount}/>
           <Button title="Reset" onPress={this.resetCount}/>
           </View>
            <Child count={this.state.clicks}/>
        </View>
    )
}
}

export default ClickCounter;