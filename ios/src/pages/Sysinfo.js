import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
var Dimensions = require('Dimensions');

var {width, height, scale} = Dimensions.get('window');
import MainScreen from '../MainScreen';
export default class Sysinfo extends Component {
    render() {
        var {styles} = this.props;
        console.log('Sysinfo.render')
        // console.log('styles.buttonBackUp:',styles.content)
        return (
            <View style={styles.container}>
                <Text >系统信息</Text>
                <Text onPress={() => {
                            //this.props.navigator.push({
                            //  component: MainScreen,
                            //})
                            this.props.navigator.jumpBack();//跳转回来
                        }}>&lt;返回</Text>
                <View style={[styles.container, styles.content]}>
                    <Text>系统宽度:{width}</Text>
                    <Text>系统高度:{height}</Text>
                    <Text>系统缩放:{scale}</Text>
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
