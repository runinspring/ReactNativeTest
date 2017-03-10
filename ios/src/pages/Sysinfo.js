import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text,
    PixelRatio, Dimensions, Platform,
} from 'react-native';
import NetUitls from '../lib/NetUtils';
// var Dimensions = require('Dimensions');

var {width, height, scale} = Dimensions.get('window');
import MainScreen from '../MainScreen';
export default class Sysinfo extends Component {

    state = {
        netType: '',
        connected: '',
        checkNetworkConnected: '未知'
    }
    componentWillMount() {
        // console.log('getNetInfo:', NetUitls.getNetInfo())
        this.setState(NetUitls.getNetInfo())
        NetUitls.checkNetworkConnected((info) => {
            console.log('检测网络链接状态:', info)
        })
    }
    componentWillUnmount() {
        // NetUtils.removeEventListener(NetUtils.EVENT_NETWORK_CHANGE,this.changeNetInfo)
    }
    // idd=0
    changeNetInfo(type, status) {
        // console.log(662,type,status,this.state)
        var obj = {}
        obj[type] = status;
        this.setState(obj);
    }
    render() {
        var {styles} = this.props;
        // console.log('Sysinfo.render')
        // console.log('styles.buttonBackUp:',Platform)
        return (
            <View style={[styles.container, {paddingLeft:50}]}>
                <Text onPress={() => {
                    this.props.navigator.jumpBack();//跳转回来
                } }>&lt;返回</Text>
                <View style={[styles.container, styles.content]}>
                    <Text>系统宽度:{width}</Text>
                    <Text>系统高度:{height}</Text>
                    <Text>系统缩放:{scale}</Text>
                    <Text>PixelRatio:{PixelRatio.get()}</Text>
                    <Text>运行平台:{Platform.OS}</Text>
                    <Text>系统版本:{Platform.Version}</Text>
                    <Text>是否为电视平台:{Platform.isTVOS.toString()}</Text>
                    <Text>是否为测试版本:{Platform.isTesting.toString()}</Text>
                    <Text>网络类型:{this.state.netType.toString()}</Text>
                    <Text>网络是否联网:{this.state.connected.toString()}</Text>
                    <Text onPress={() => { 
                        NetUitls.checkNetworkConnected((type) => { this.setState({ checkNetworkConnected: type }) }) 
                    } }>点击检查网络是否联网:{this.state.checkNetworkConnected.toString()}</Text>
                </View>

            </View>
        );
    }
}
const stylesCt = StyleSheet.create({
    // 返回
    backText: {
        color: '#ffffff',
        fontSize: 18,
    },
});
// justifyContent: 'top', //垂直居中
