/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class Clip extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }
  copiedText = async () => {
    if (Clipboard.hasString()) {
      const clippedData = await Clipboard.getString();
      this.setState({data: clippedData});
    } else {
      Alert.alert('Information', 'Found Nothing in clipboard');
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainHead}>
          Click on the icon to paste your recently clipboard text !
        </Text>
        <View style={styles.container}>
          <TextInput style={styles.textInput} value={this.state.data} />
          <TouchableOpacity
            onPress={this.copiedText}
            style={styles.imageContainer}>
            <Image source={require('../assets/icons/paste.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainHead: {
    textAlign: 'center',
    padding: 20,
    margin: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 2,
    backgroundColor: 'pink',
    marginBottom: 40,
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    borderRadius: 8,
    overflow: 'hidden',
  },
  container: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
  },
  imageContainer: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
  },
});

export default Clip;
