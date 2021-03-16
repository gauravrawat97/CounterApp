import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import InputComponent from './InputComponent';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
    this.getFocusedElement = this.getFocusedElement.bind(this);
    this.storeData = this.storeData.bind(this);
  }
  getData(content, name) {
    this.setState({[name]: content});
  }
  getFocusedElement(name) {
    this.setState({focused: name});
  }

  async storeData() {
    try {
      const data = this.state;

      await AsyncStorage.setItem('userdata', JSON.stringify(data));

      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (e) {}
  }
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={style.container}>
          <View style={style.content}>
            <Text style={style.heading}>Let's Get Started!</Text>
            <Text style={style.subheading}>
              Create an account to Q Allure to get all features
            </Text>
          </View>
          <View style={style.inputs}>
            <InputComponent
              sendText={this.getData}
              placeholder={'Name'}
              name={'name'}
              icon={'user'}
              focused={this.state.focused}
              focusInput={this.getFocusedElement}
              type={'default'}
            />
            <InputComponent
              sendText={this.getData}
              placeholder={'Email'}
              name={'email'}
              icon={'mail'}
              focused={this.state.focused}
              focusInput={this.getFocusedElement}
              type={'email-address'}
            />
            <InputComponent
              sendText={this.getData}
              placeholder={'Phone'}
              name={'phone'}
              icon={'smartphone'}
              focused={this.state.focused}
              focusInput={this.getFocusedElement}
              type={'number-pad'}
            />
            <InputComponent
              sendText={this.getData}
              placeholder={'Password'}
              name={'password'}
              icon={'lock'}
              focused={this.state.focused}
              focusInput={this.getFocusedElement}
              type={'default'}
            />
            <InputComponent
              sendText={this.getData}
              placeholder={'Confirm Password'}
              icon={'lock'}
              name={'repeatpassword'}
              focused={this.state.focused}
              focusInput={this.getFocusedElement}
              type={'default'}
            />
          </View>
          <TouchableOpacity style={style.btnContainer} onPress={this.storeData}>
            <Text style={style.btnText}>Create</Text>
          </TouchableOpacity>
          <View style={style.bottomText}>
            <Text style={style.text}>
              Already Have an Account?
              <Text style={style.textLink}> Login Here.</Text>
            </Text>
          </View>
        </View>

        <SafeAreaView />
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFE',
    marginHorizontal: 10,
    borderRadius: 50,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  content: {
    alignSelf: 'center',
    marginTop: '25%',
    height: 70,
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 12,
    fontWeight: '300',
  },
  inputs: {
    paddingHorizontal: 20,
  },

  btnContainer: {
    backgroundColor: '#0E59B8',
    alignSelf: 'center',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 60,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 50,
  },

  text: {
    textAlign: 'center',
    flex: 1,
  },
  textLink: {
    color: '#0E59B8',
    paddingLeft: 2,
  },
});

export default Register;
