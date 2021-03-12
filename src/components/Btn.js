import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Btn({show}) {
  if (show) {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Continue</Text>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4f8080',
    padding: 15,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
