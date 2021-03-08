import React,{useState} from 'react';
import { SafeAreaView,Switch, View, FlatList, StyleSheet, Text, StatusBar, RefreshControl } from 'react-native';
import Slider from '@react-native-community/slider';

const SlidingSwitch = () => {
  
  const [data,setData]=useState()
  const [isEnabled, setIsEnabled] = useState(false);
  const [slideValue, setValue] = useState(1);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <Switch
        trackColor={{ false: "black", true: "grey" }}
        thumbColor={isEnabled ? "black" : "white"}
        ios_backgroundColor="black"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    {isEnabled&&<View style={styles.slideContainer}>
    <Slider
      style={styles.slide}
      minimumValue={1}
      maximumValue={10}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTint
      Color="#000000"
      value={slideValue}
      onValueChange={setValue}
      step={1}
      minimumTrackTintColor="green"
      maximumTrackTintColor='grey'
      // thumbTintColor="yellow"
      thumbImage={require('../assets/slide.png')}

/>
    <Text style={styles.text}>{slideValue}</Text>
    </View>}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  slideContainer:{
    marginTop:30
  },
  slide:{
    width:200,
  },
  text:{
    fontSize:20,
    alignSelf:'center',
    marginTop:20
  }
});

export default SlidingSwitch;