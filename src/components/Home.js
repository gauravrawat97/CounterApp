import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
    this.userPermission = this.userPermission.bind(this);
  }
  componentDidMount() {
    this.userStatus();
  }

  async userStatus() {
    try {
      const userStatus = await AsyncStorage.getItem('userdata');
      if (userStatus !== null) {
        this.setState(JSON.parse(userStatus));
      }
      this.setState({isLoading: false});
    } catch (e) {}
  }
  async logout() {
    try {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Register');
    } catch (e) {}
  }

  userPermission() {
    Alert.alert('Log Out', 'Are you sure you want to clear your data ?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: this.logout,
      },
    ]);
  }

  render() {
    const {name, email, phone} = this.state;
    return (
      <>
        <SafeAreaView />
        <View style={style.container}>
          <View style={style.header}>
            <TouchableOpacity
              style={style.btnContainer}
              onPress={this.userPermission}>
              <Icon name={'log-out'} size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={style.contentContainer}>
            <View style={style.content}>
              <Icon name={'user'} size={30} color="black" />
              <Text style={style.text}>{name}</Text>
            </View>
            <View style={style.content}>
              <Icon name={'mail'} size={30} color="black" />
              <Text style={style.text}>{email}</Text>
            </View>
            <View style={style.content}>
              <Icon name={'smartphone'} size={30} color="black" />
              <Text style={style.text}>{phone}</Text>
            </View>
          </View>
        </View>

        <SafeAreaView />
      </>
    );
  }
}

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2461AD',
    padding: 10,
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btnContainer: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5CBA7',
    borderRadius: 30,
    flex: 1,
    margin: 20,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#A0D322',
    flexWrap: 'wrap',
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: '#303D10',
  },
});
