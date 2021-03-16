import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function InputComponent({
  name,
  focusInput,
  sendText,
  placeholder,
  icon,
  focused,
  type,
}) {
  return (
    <View style={focused === name ? style.focusedContainer : style.container}>
      {focused === name ? (
        <Icon name={icon} size={30} color="#0E59B8" />
      ) : (
        <Icon name={icon} size={30} color="#B2BABB" />
      )}
      <TextInput
        onChangeText={(text) => sendText(text, name)}
        onFocus={() => focusInput(name)}
        style={style.textInput}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: '#B2BABB',
    borderWidth: 2,
    height: 60,
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  focusedContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: '#0E59B8',
    borderWidth: 2,
    height: 60,
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    marginLeft: 20,
    flex: 1,
  },
});
export default InputComponent;
