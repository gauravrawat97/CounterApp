import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  SafeAreaView,
} from 'react-native';

class MovingBall extends Component {
  constructor(props) {
    super(props);
    this.state = {pan: new Animated.ValueXY()};

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.state.pan.x, dy: this.state.pan.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        this.state.pan.flattenOffset();
      },
    });
  }

  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <Animated.View
            style={{
              transform: [
                {translateX: this.state.pan.x},
                {translateY: this.state.pan.y},
              ],
            }}
            {...this.panResponder.panHandlers}>
            <View style={styles.box} />
          </Animated.View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 50,
    width: 50,
    backgroundColor: '#50A9A9',
    borderRadius: 100,
  },
});

export default MovingBall;
