import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const circles = [0, 1, 2];
const DATA = [
  {
    name: 'FITNESS',
    image: require('../assets/cycle.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper erat vitae luctus gravida',
  },
  {
    name: 'POWERLIFTING',
    image: require('../assets/dumbell.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper erat vitae luctus gravida',
  },
  {
    name: 'YOGA',
    image: require('../assets/yoga.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper erat vitae luctus gravida',
  },
];

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
      activeElement: 0,
    };
    this.fadeContent = this.fadeContent.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  }

  fadeContent() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(),
    );
  }

  changeIndex({nativeEvent}) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    ); // I take no credit for this brilliant mathematical function I googled-Gaurav
    if (slide !== this.state.activeElement) {
      this.setState({activeElement: slide});
    }
  }

  render() {
    return (
      <>
        <SafeAreaView />
        <View style={style.container}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={this.fadeContent}
            onScroll={this.changeIndex}
            scrollEventThrottle={16}>
            {DATA.map((content, index) => (
              <Animated.View
                key={index}
                style={[
                  style.contentContainer,
                  {
                    opacity: this.state.fadeAnim,
                  },
                ]}>
                <Image style={style.Image} source={content.image} />
                <Text style={style.heading}>{content.name}</Text>
                <Text style={style.description}>{content.description}</Text>
              </Animated.View>
            ))}
          </ScrollView>
          <View style={style.circleContainer}>
            {circles.map((data, index) => (
              <View
                key={index}
                style={
                  this.state.activeElement === index
                    ? style.activeCircle
                    : style.circle
                }
              />
            ))}
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
  },
  contentContainer: {
    flex: 1,
  },

  Image: {
    height: height / 1.7,
    width: width,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
    opacity: 0.8,
    width: width,
    padding: 7,
    marginTop: 30,
    textAlign: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: '#366666',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width / 3,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 80,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'white',
    borderColor: '#366666',
    borderWidth: 1,
  },
  activeCircle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#366666',
  },
});

export default OnBoarding;
