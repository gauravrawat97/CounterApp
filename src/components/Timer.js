import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';
const itemList = [
  {
    name: 'First',
    time: moment().add(6, 's'),
  },
  {
    name: 'Second',
    time: moment().add(10, 's'),
  },
  {
    name: 'Third',
    time: moment().add(15, 's'),
  },
  {
    name: 'Fourth',
    time: moment().add(30, 's'),
  },
];

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: new Date(), timer: null};
  }
  componentDidMount() {
    const startTimer = setInterval(
      () => this.setState({currentTime: new Date()}),
      1000,
    );
    this.setEndTimer(startTimer);
  }

  setEndTimer(startTimer) {
    this.setState({timer: startTimer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.timeContainer}>
          <Text style={style.currentTime}>
            {moment(this.state.currentTime).format('hh:mm:ss')}
          </Text>
        </View>
        {itemList.map((content, key) =>
          moment(this.state.currentTime).format('hh:mm:ss') >=
          moment(content.time).format('hh:mm:ss') ? (
            <TouchableOpacity key={key} style={style.expired}>
              <Text style={style.expiredText}>Expired</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity key={key} style={style.notExpired}>
              <View style={style.expireTime}>
                <Text style={style.Timertext}>Expire On</Text>
                <Moment
                  style={style.Timertext}
                  date={content.time}
                  format="hh:mm:ss"
                  element={Text}
                />
              </View>
              <Text style={style.text}>{content.name}</Text>
            </TouchableOpacity>
          ),
        )}
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10,
    marginTop: 50,
  },
  timeContainer: {
    alignSelf: 'flex-end',
  },
  currentTime: {
    fontSize: 20,
  },
  expired: {
    backgroundColor: '#D7DBDD',
    height: 100,
    padding: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notExpired: {
    backgroundColor: '#76448A',
    height: 100,
    padding: 10,
    marginVertical: 20,
  },
  expireTime: {
    alignSelf: 'flex-end',
  },
  text: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: '#FDFEFE',
  },
  expiredText: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
  },
  Timertext: {
    color: 'white',
  },
});

export default Timer;
