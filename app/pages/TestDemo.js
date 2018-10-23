
/**
 * react-native-scrollable-tab-view的学习使用
 * **/
import  React, {PureComponent} from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'
const {width:screenWidth, height:screenHeight} = Dimensions.get('window');
export default class TestDemo extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}> 
        <ScrollableTabView
          style={{marginTop: 5 }}
          tabBarTextStyle = {{fontSize:16}}
          initialPage={0}
          renderTabBar={
            () => <ScrollableTabBar  style={{borderBottomWidth:0, paddingBottom:5, width:screenWidth * .9, height:45}}/>}
          tabBarUnderlineStyle =  {{height:2, minWidth:Math.floor(screenWidth * .9 / 5), backgroundColor:'rgba(216,30,6,.8)'}}
          tabBarBackgroundColor ={'pink'}
          tabBarActiveTextColor = {'green'}
          tabBarInactiveTextColor = {'red'}
          scrollWithoutAnimation ={true}
          prerenderingSiblingsNumber={1}
          locked={false}
          onChangeTab={(ref) => {}}
          onScroll={(position) => {}}
        >
          {
            ScrollTableArr.map((item, index) => {
              return (
                <View key={index} tabLabel = {item.columnName} style={styles.center}> 
                  <Text>{item.columnName}</Text>
                  <Text>{item.T1348647909107}</Text>
                </View>
              )
            })
          }
        </ScrollableTabView>
      </View>
    )
  }
}


const ScrollTableArr = [
  {columnName: '头条', requestCode: 'T1348647909107'},
  {columnName: '娱乐', requestCode: 'T1348648517839'},
  {columnName: '科技', requestCode: 'T1348649580692'},
  {columnName: '手机', requestCode: 'T1348649654285'},
  {columnName: '冰雪运动', requestCode: 'T1486979691117'},
  {columnName: '云课堂', requestCode: 'T1421997195219'},
  {columnName: '游戏', requestCode: 'T1348654151579'},
  {columnName: '旅游', requestCode: 'T1348654204705'},
  {columnName: '二次元', requestCode: 'T1481105123675'},
  {columnName: '轻松一刻', requestCode: 'T1350383429665'},
  {columnName: '体育', requestCode: 'T1348649079062'}
]
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
});
 