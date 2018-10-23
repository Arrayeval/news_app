import React, {PureComponent} from 'react'
import {
  Image,
  StyleSheet, 
} from 'react-native'

import { createBottomTabNavigator  } from 'react-navigation'
import Home from './pages/Home'
import Live from './pages/Live'
import Mine from './pages/Mine'
import Video from './pages/Video'
import TestDemo from './pages/TestDemo'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default MainTab = createBottomTabNavigator ({
  // 自己的例子demo页面
  TestDemo: {
    screen: TestDemo,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: 'TestDemo',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '首页',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-home${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    })
  },

  Live: {
    screen: Live,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '直播',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-tv${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    })
  },

  Video: {
    screen: Video,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '视频',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-videocam${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    })
  },
  
  Mine: {
    screen: Mine,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '我的',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-person${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    })
  },
},{
   //这里设置的是一般情况下Tabbar共同的属性
   tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
   swipeEnabled:false, // 是否允许在标签之间进行滑动。
   animationEnabled: false, // 是否在更改标签时显示动画。
   lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
   initialRouteName:'', // 设置默认的页面组件
   backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
   tabBarOptions:{
         activeTintColor:'#d81e06', // label和icon的前景色 活跃状态下（选中）。
         inactiveTintColor:'#515151', // label和icon的前景色 不活跃状态下(未选中)。
         labelStyle:{
             fontSize: 12,
         }, //label的样式。
   }
})
const styles = StyleSheet.create({
  navigatorTitle:{
      fontSize:17,
      color:'white',
  },
  navigator:{
      backgroundColor:'#d81e06',
  },
  tabbarImage:{
      width:25,
      height:25,
      marginBottom:-3,
  },
})