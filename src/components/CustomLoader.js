import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';

class CustomLoader extends Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <Image
              style={styles.imageResize}
              source={require('../assets/icons/loader.gif')}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  imageResize: {
    width: 60,
    height: 40,
  },
});

export default CustomLoader;
