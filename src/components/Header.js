import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

export default function Header({closeApp}) {
  return (
    <>
      <View style={styles.head}>
        <View style={styles.headText}>
          <Text style={styles.text}>Store Selected:</Text>
          <Text style={[styles.text, styles.textContent]}>
            Coop Moindal Aby
          </Text>
        </View>
        <TouchableOpacity style={styles.crossBtn} onPress={closeApp}>
          <Image source={require('../assets/icons/cancel.png')} />
        </TouchableOpacity>
      </View>
      {Platform.OS === 'ios' && (
        <View style={styles.iosTextInputContainer}>
          <Image source={require('../assets/icons/search.png')} />
          <TextInput style={styles.textInput} />
        </View>
      )}
      {Platform.OS === 'android' && (
        <View style={styles.androidTextInputContainer}>
          <Image
            style={styles.androidIcon}
            source={require('../assets/icons/search.png')}
          />
          <TextInput style={styles.textInput} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: '#A9A9A9',
  },
  textContent: {
    paddingLeft: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  crossBtn: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    overflow: 'hidden',
  },
  iosTextInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    borderColor: '#D3D3D3',
    borderWidth: 2,
    margin: 8,
    borderRadius: 8,
    padding: 10,
  },
  androidTextInputContainer: {
    margin: 5,
    backgroundColor: '#D3D3D3',
    borderColor: '#D3D3D3',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  androidIcon: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
  },
});
