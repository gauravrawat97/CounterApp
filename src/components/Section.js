/* eslint-disable no-undef */
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from './CustomLoader';
import Header from './Header';
import Btn from './Btn';
import Content from './Content';
import {StyleSheet, SafeAreaView, BackHandler, Alert} from 'react-native';
import CONTENT from '../../full.json';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], checked: false, load: false};
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    setTimeout(() => {
      this.formatData();
    }, 3000);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  formatData() {
    const section = CONTENT.reduce((accumulator, currentContent) => {
      let title = currentContent.primaryCategory.categoryName;
      let DATA = currentContent.productName;

      const titleExist = accumulator.findIndex(
        (contentData) => contentData.title === title,
      );
      if (titleExist === -1) {
        accumulator = [...accumulator, {title, data: [DATA]}];
      } else {
        accumulator[titleExist].data = [...accumulator[titleExist].data, DATA];
      }
      return accumulator;
    }, []);
    this.setState({data: section, load: true});
  }

  backAction() {
    Alert.alert(
      'Quit Application?',
      'Are you sure you want to exit the application?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
        },
        {
          text: 'YES',
          onPress: () => BackHandler.exitApp(),
        },
      ],
    );
    return true;
  }

  showBtn = (value) => {
    this.setState({checked: value});
  };
  render() {
    if (this.state.load) {
      return (
        <>
          <LinearGradient
            style={styles.topContainer}
            colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)', '#4f8080']}>
            <SafeAreaView />

            <Header closeApp={this.backAction} />
          </LinearGradient>
          <Content data={this.state.data} checkBoxPressed={this.showBtn} />
          <Btn show={this.state.checked} />
          <SafeAreaView />
        </>
      );
    } else {
      return <Loader />;
    }
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
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
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    borderColor: '#D3D3D3',
    borderWidth: 2,
    margin: 8,
    borderRadius: 8,
    padding: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
  },

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

export default Section;
