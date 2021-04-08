import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function ProgressBar() {
  const progress = useTrackPlayerProgress();
  const done = {flex: progress.position, backgroundColor: 'red'};
  const remaining = {
    flex: progress.duration - progress.position,
    backgroundColor: 'grey',
  };
  return (
    <View style={styles.progress}>
      <View style={done} />
      <View style={remaining} />
    </View>
  );
}

function ControlButton({title, onPress}) {
  switch (title) {
    case 'prev':
      return (
        <TouchableOpacity
          style={styles.controlButtonContainer}
          onPress={onPress}>
          <Icon name={'stepbackward'} size={30} />
        </TouchableOpacity>
      );
    case 'next':
      return (
        <TouchableOpacity
          style={styles.controlButtonContainer}
          onPress={onPress}>
          <Icon name={'stepforward'} size={30} />
        </TouchableOpacity>
      );

    case 'Play':
      return (
        <TouchableOpacity
          style={styles.controlButtonContainer}
          onPress={onPress}>
          <Icon name={'play'} size={30} />
        </TouchableOpacity>
      );

    case 'Pause':
      return (
        <TouchableOpacity
          style={styles.controlButtonContainer}
          onPress={onPress}>
          <Icon name={'pausecircle'} size={30} />
        </TouchableOpacity>
      );
  }
}

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');
  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const {style, onNext, onPrevious, onTogglePlayback} = props;

  var middleButtonText = 'Play';

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = 'Pause';
  }

  return (
    <View style={[styles.card, style]}>
      <Image
        style={styles.cover}
        source={{
          uri: trackArtwork,
        }}
      />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={'prev'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'next'} onPress={onNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
  },
  progress: {
    height: 2,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
