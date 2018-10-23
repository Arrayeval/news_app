

import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import RouteConfig from './app/RouteConfig'
import StackNavigatorConfig from './app/StackNavigatorConfig'
const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig)
export default class App extends PureComponent {
  render() {
    return (
      <Navigator />
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
