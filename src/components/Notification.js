import React, {Component} from 'react';
import messaging from '@react-native-firebase/messaging';
import {View, Text, StyleSheet} from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {messageBody: null, title: null};
  }

  componentDidMount() {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      this.setState({
        messageBody: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
      });
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          this.setState({
            messageBody: remoteMessage.notification.body,
            title: remoteMessage.notification.title,
          });
        }
      });

    messaging().onMessage(async (remoteMessage) => {
      this.setState({
        messageBody: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
      });
    });
  }

  render() {
    return (
      <View style={style.container}>
        <Text>This is practice ground for various notification call</Text>
        <View style={style.messageContainer}>
          <Text style={[style.head, style.text]}>{this.state.title}</Text>
          <Text style={style.text}>{this.state.messageBody}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    marginTop: 20,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    textAlign: 'center',
  },
});
