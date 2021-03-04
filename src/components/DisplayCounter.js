import React,{Component,PureComponent} from 'react'
import {View,Text} from 'react-native'


class DisplayCounter extends Component{
    constructor(props)
    {
        super(props)
        console.log("Child Constructor");
        
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(`Child getDerivedStateFromProps called`)
        console.log(props)
        console.log(state)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(`Child shouldComponentUpdate called`)
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log(`Child getSnapshotBeforeUpdate called`)
        console.log(prevProps)
        console.log(prevState)

    }

    componentDidMount()
    {
        console.log(`Child componentDidMount called`)
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log(`Child componentDidUpdate`)
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
    }
    componentWillUnmount(){
        console.log(`Child componentWillUnmount called`)
    }

  
render()

{
    console.log("Child Render Method");
    const {count} = this.props;
    return (
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
            <View>
            <Text style={{fontSize:30}}>Count: {count}</Text>
            </View>
            
            <Text style={{fontSize:count}}>My current size is {count}</Text>
            
        </View>

    );
}
}

export default DisplayCounter;

