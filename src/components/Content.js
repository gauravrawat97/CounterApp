/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, StyleSheet, Text, SectionList} from 'react-native';
Item = ({title, pressed}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{title}</Text>
    <CheckBox
      lineWidth={3}
      onCheckColor={'white'}
      onFillColor={'#4f8080'}
      style={styles.checkBox}
      onValueChange={(newValue) => pressed(newValue)}
    />
  </View>
);

export default function Content({data, checkBoxPressed}) {
  return (
    <View style={styles.sectionContainer}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item pressed={checkBoxPressed} title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.itemHeading}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 10,
    flex: 4,
    padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 20,
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
  },
  itemText: {
    alignSelf: 'center',
    fontSize: 15,
  },
  checkBox: {
    height: 20,
  },
});
