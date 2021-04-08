import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  Linking,
  Platform,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import playlistfile from '../../Playlist.json';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {TouchableOpacity} from 'react-native-gesture-handler';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      watchID: null,
    };
    this.storeID = this.storeID.bind(this);
  }

  async componentDidMount() {
    const response =
      Platform.OS === 'ios'
        ? await this.hasLocationPermissionIOS()
        : await this.hasLocationPermissionAndroid();

    if (response) {
      let watchId = Geolocation.watchPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {},
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
          forceRequestLocation: true,
          showLocationDialog: true,
          useSignificantChanges: true,
        },
      );
      this.storeID(watchId);
    }
  }

  storeID(id) {
    this.setState({watchID: id});
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.state.watchID);
  }

  async hasLocationPermissionAndroid() {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      Alert.alert('Location permission denied by user.', 'Permission Denied');
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Alert.alert(
        'Location permission revoked by user.',
        'Never ask again selected',
      );
    }

    return false;
  }

  async hasLocationPermissionIOS() {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert('Service Disabled', 'Location service is disabled', [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ]);
    }

    return false;
  }

  displayItem({item}) {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemText}>{item.artist}</Text>
        </View>
        <View style={styles.iconStyle}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Video Player', {
                video: item.video,
              })
            }>
            <Icon name={'videocamera'} size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Audio Player', {
                audioFile: item,
              })
            }>
            <Feather name={'music'} size={15} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const {latitude, longitude} = this.state;
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.Mapcontainer}>
            {this.state.longitude != null && (
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{longitude, latitude}}
                  image={require('../assets/location.png')}
                />
              </MapView>
            )}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHead}>Current Location</Text>
            <Text style={styles.text}>{`${latitude},${longitude}`}</Text>
          </View>

          <View style={styles.playListHeader}>
            <View style={styles.headerContainer}>
              <Text style={styles.playlist}>PlayList</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Audio Playlist Player')
                }>
                <Icon name={'playcircleo'} size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={playlistfile}
            renderItem={(item) => this.displayItem(item, this.props)}
            keyExtractor={(item) => item.id}
          />
        </View>
        <SafeAreaView />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  Mapcontainer: {
    height: '40%',
  },
  map: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  },
  textContainer: {
    alignSelf: 'center',
  },
  textHead: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
  },
  playListHeader: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  playlist: {
    fontSize: 20,
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconStyle: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-evenly',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '300',
  },
});

export default Home;
