import React, {PureComponent} from "react"
import {FlatList, Text, View, Image, TouchableOpacity, Dimensions, Animated, ImageBackground, Easing, 
  StyleSheet} from 'react-antive'
import ajax from "../utils/fetch"
const {screenWidth:width , screenHeight:height} =  Dimensions.get('window')

export default class VideoFlatListView extends PureComponent {
  constructor (props) {
    super(props)
    this.state= {
      sourceData: [],
      refreshing:false,
      flatHeight:0,
      indexText:''
    }
  }
  currage = 0
  rotateDeg = new Animated.Value(0)

  // 获取数据
  _getNewsData = () => {
    let _this = this
    // video code
    let requestCode = this.props.requestCode
    ajax({
      url:`http://c.3g.163.com/nc/video/${requestCode}/${_this.currPage}-10.html`,
      success: (data) => {
        data['videoList'][0].length = 61
        _this.setState({ // 上拉加载/下拉加载
          sourceData: _this.state.refreshing ? data['videoList'] : [...this.state.sourceData, ...data['videoList']]
        })
        _this.currage += 10
      },
      error: (err) => {
        _this.refs.toast.show("网络请求异常")
      },
      complete: () => {
        _this.state.refreshing && _this.setState({
          refreshing: false
        })
      }
    })
  }

  //
  _keyExtractor = (item, index) => index + ''

  // 跳转详情
  _onPressItem = (item) => {
    this.props.navigation.push('VideoDetail',{item})
  }

  // 跳转指定位置
  _doActionToItem = () => {
    this.flatList.scrollToIndex({
      viewPosition: 0,
      index: this.state.indexText // The index to scroll to. Required.
    })
  }

  // 跳转到内容最底部
  _doActionToBottom = () => {
    this.flatList.scrollToEnd()
  }

  // 空布局
  _renderEmptyView = () => {
    return (
      <View style={{height: this.state.flatHeight, backgroundColor: "#F8F8F8", justufyContent: 'center', marginTop:20}}>
        <Image source={require('./../../assets/image/list_placeholder.png')} resizeMode={'contain'} style={{width:80, height:60}}/>
      </View>
    )
  }

  _renderFooter = () => {
    let len = this.state.sourceData.length
    const spin = this.rotateDeg.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    })
    return (
      
    )
  }
}