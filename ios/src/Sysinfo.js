import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height, scale} = Dimensions.get('window');
import MainScreen from './MainScreen';
export default class Sysinfo extends Component {
    render() {
        var styles = this.props.mainStyles;
        console.log('Sysinfo.render')
        console.log('styles.buttonBackUp:',styles.content)
        return (
            <View style={styles.container}>
                <View style={[styles.heading,styles.content]}>
                    <Text style={styles.headText}>系统信息</Text>
                </View>
                <View style={{position:'absolute',left:6}}>
                    <View style={[styles.heading,{justifyContent: 'center'}]}>
                        <Text style={stylesCt.backText} onPress={() => {
                            //this.props.navigator.push({
                            //  component: MainScreen,
                            //})
                            this.props.navigator.jumpBack();//跳转回来
                        }}>&lt;返回</Text>
                    </View>
                </View>
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
