/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Nav from './components/Nav.js';
import CameraView from './components/CameraView.js';


export default class rejack extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CameraView />
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('rejack', () => rejack);
