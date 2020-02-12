/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import MovieHome from './src/'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <MovieHome />
      </SafeAreaView>
    );
  }
}