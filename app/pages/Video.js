import React, {PureComponent} from 'react'
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  Image,
  ScrollView,
}from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import VideoFlatListView from '../components/VideoFlatListView'
export default class Video extends PureComponent{
  render () {
    return  (
      <View>
         <Text>this is Video page </Text>
      </View>
    )
  }
}