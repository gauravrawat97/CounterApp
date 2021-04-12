import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Alert, Image, Text} from 'react-native';
import {
  LoginButton,
  AccessToken,
  Settings,
  GraphRequestManager,
  GraphRequest,
} from 'react-native-fbsdk-next';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      userPic: null,
    };
  }
  componentDidMount() {
    Settings.initializeSDK();
  }
  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.loginBox}>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                Alert.alert('Info: ', 'Something went wrong');
              } else if (result.isCancelled) {
                Alert.alert('Info', 'You cancelled the login');
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  let accessToken = data.accessToken;
                  const responseInfoCallback = (
                    responseError,
                    responseResult,
                  ) => {
                    if (responseError) {
                      Alert.alert('Error', 'Something went wrong');
                    } else if (responseResult) {
                      let pic = `https://graph.facebook.com/${responseResult.id}/picture?type=large&access_token=${accessToken}`;
                      this.setState({
                        name: responseResult.name,
                        id: responseResult.id,
                        userPic: pic,
                      });
                    }
                  };

                  const infoRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken: accessToken,
                      parameters: {
                        fields: {
                          string: 'name,id',
                        },
                      },
                    },
                    responseInfoCallback,
                  );

                  new GraphRequestManager().addRequest(infoRequest).start();
                });
              }
            }}
            onLogoutFinished={() =>
              this.setState({name: '', userPic: null, id: ''})
            }
          />
        </View>
        <View style={style.contentContainer}>
          <View>
            <Image
              source={{
                uri: this.state.userPic,
              }}
              style={style.image}
            />
          </View>
          <View>
            <Text style={style.contentText}>{this.state.name}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  contentContainer: {
    marginTop: 50,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  contentText: {
    fontSize: 20,
  },
});
