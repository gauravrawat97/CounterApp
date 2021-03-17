import React, {Component} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mylocation: {
        latitude: 28.620001,
        longitude: 77.240003,
      },
      data: [
        {latitude: 28.612593388867978, longitude: 77.23058075727562},
        {latitude: 28.595741717949025, longitude: 77.24579503219587},
        {latitude: 28.649161792713215, longitude: 77.23295598163014},
        {latitude: 28.647415363686918, longitude: 77.20766305201585},
        {latitude: 28.60611229683468, longitude: 77.2486196233204},
        {latitude: 28.570092686387497, longitude: 77.25067387141081},
        {latitude: 28.573418957741325, longitude: 77.23141529556233},
      ],
    };

    this.setMyLocation = this.setMyLocation.bind(this);
  }

  setMyLocation(e) {
    const location = e.nativeEvent.coordinate;

    this.setState({mylocation: {...location}});
  }

  render() {
    const {latitude, longitude} = this.state.mylocation;
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {this.state.data.map((marker, index) => (
              <Marker key={index} coordinate={marker} pinColor={'red'} />
            ))}

            <Marker
              coordinate={this.state.mylocation}
              onDragEnd={(e) => this.setMyLocation(e)}
              draggable
              image={require('../assets/location.png')}
            />
          </MapView>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHead}>Current Location</Text>
          <Text style={styles.text}>{`${latitude},${longitude}`}</Text>
        </View>
        <SafeAreaView />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHead: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
  },
});

export default MyMap;
