import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';

export default class Nav extends Component {
  render() {
    return (
      <View>
        <Text style={styles.capture} >[Hæ]</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 20
  }
});
