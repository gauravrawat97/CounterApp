import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
class File extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [1, 2, 3, 4, 5]};
  }
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        {console.log(this.props)}
        {this.state.data.map((content) => (
          <Text>{content}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default File;
