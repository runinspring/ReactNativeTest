import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text,
    PixelRatio, Dimensions, Platform, NetInfo
} from 'react-native';
// var Dimensions = require('Dimensions');

var {width, height, scale} = Dimensions.get('window');
import MainScreen from '../MainScreen';
export default class Sysinfo extends Component {
    state = {
        netinfo: ''
    }
    componentWillMount() {
        console.log('componentWillMount');
        //监听网络状态改变
        NetInfo.addEventListener('change', (status) => {
            this.setState({ netinfo: status });
        });
    }

    changeNetInfo(status){
        console.log(789798798798)
    }
    render() {
        var {styles} = this.props;
        console.log('Sysinfo.render')
        // console.log('styles.buttonBackUp:',styles.content)
        return (
            <View style={[styles.container, styles.xCenter]}>
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
                    <Text>网络信息:{this.state.netinfo}</Text>
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
