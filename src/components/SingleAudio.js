import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Player from './Player';

export default class SingleAudio extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.setup();
  }

  async componentWillUnmount() {
    await TrackPlayer.reset();
  }
  async setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
    await TrackPlayer.add(this.props.route.params.audioFile);
    await TrackPlayer.play();
  }
  async togglePlayback() {
    const playbackState = await TrackPlayer.getState();

    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Player
          onNext={skipToNext}
          style={styles.player}
          onPrevious={skipToPrevious}
          onTogglePlayback={this.togglePlayback}
        />
      </View>
    );
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  player: {backgroundColor: '#A9CCE3'},
});
