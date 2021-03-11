import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const DATA = [
  {
    text: 'Apple',
  },
  {
    text: 'Banana',
  },
  {
    text: 'Cat',
  },
  {
    text: 'Dog',
  },
  {
    text: 'Elephant',
  },
  {
    text: 'Fish',
  },
  {
    text: 'Guava',
  },
  {
    text: 'Horse',
  },
  {
    text: 'Ice',
  },
  {
    text: 'Jacket',
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
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

  copyToClipBoard(text) {
    Clipboard.setString(text);
    Alert.alert('Info', 'Copied text to clipboard !');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainHead}>
          Click on the icon to add content to clipboard !
        </Text>
        <ShowData data={DATA} copyData={this.copyToClipBoard} />
      </SafeAreaView>
    );
  }
}

function ShowData({data, copyData}) {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        {data.map((content, key) => (
          <Text style={styles.text} key={key}>
            {content.text}
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => copyData(content.text)}>
              <Image
                style={styles.image}
                source={require('../assets/icons/copy.png')}
              />
            </TouchableOpacity>
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  mainHead: {
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 2,
    backgroundColor: 'cyan',
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  scrollContainer: {
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
  imageContainer: {
    paddingLeft: 10,
  },
});

export default Home;
