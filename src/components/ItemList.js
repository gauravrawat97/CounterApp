import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';
import {back} from 'react-native/Libraries/Animated/src/Easing';

function ItemList({
  name,
  icon,
  anotherIcon,
  secondaryIcon,
  moreText,
  text,
  backgroundColor,
}) {
  if (!moreText && !anotherIcon) {
    return (
      <TouchableOpacity
        style={[style.container, backgroundColor ? style.border : null]}>
        <View style={style.textContainer}>
          <Icon name={icon} size={30} />
          <Text style={style.text}>{name}</Text>
        </View>
        <View style={style.rightIcon}>
          <Ant name="right" size={25} />
        </View>
      </TouchableOpacity>
    );
  } else if (moreText && !anotherIcon) {
    return (
      <TouchableOpacity
        style={[style.container, backgroundColor ? style.border : null]}>
        <View style={style.textContainer}>
          <Icon name={icon} size={30} />
          <Text style={style.text}>{name}</Text>
        </View>
        <View style={style.rightContainer}>
          <Text style={style.textRight}>{text}</Text>
          <Ant style={style.iconFix} name="right" size={25} />
        </View>
      </TouchableOpacity>
    );
  } else if (moreText && anotherIcon) {
    return (
      <TouchableOpacity
        style={[style.container, backgroundColor ? style.border : null]}>
        <View style={style.textContainer}>
          <Icon name={icon} size={30} />
          <Text style={style.text}>{name}</Text>
        </View>
        <View style={style.rightSide}>
          <View style={style.rightSideView}>
            <Icon name={secondaryIcon} size={25} />
            <Text style={style.rightText}>{text}</Text>
          </View>
          <Ant style={style.iconFix} name="right" size={25} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ItemList;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 20,
  },
  rightIcon: {
    width: 50,
  },

  rightSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  rightSideView: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  rightText: {
    fontSize: 20,
  },

  rightContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textRight: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    paddingLeft: 20,
  },
  iconFix: {
    marginRight: 4,
  },
  border: {
    borderTopWidth: 20,
    borderColor: '#E8E8E8',
  },
});
