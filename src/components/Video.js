import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import VideoPlayer from 'react-native-video-player';
const {width} = Dimensions.get('window');
class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <VideoPlayer
            video={{
              uri: this.props.route.params.video,
            }}
            videoWidth={width / 2}
            videoHeight={width / 2}
          />
        </View>
        <SafeAreaView />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignContent: 'center'},
});

export default Video;
