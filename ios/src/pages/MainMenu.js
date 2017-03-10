import React, { Component } from 'react';
import Sysinfo from './Sysinfo';
import Buttons from './Buttons';

import {
    StyleSheet,
    View, TouchableHighlight,
    Text
} from 'react-native';
export default class MainMenu extends Component {
    onButtonPress(id) {
        // console.log('id:', id)
        var obj = {};
        switch (id) {
            case 0:
                obj = {
                    component: Sysinfo,
                    title: '系统信息',
                    left: {
                        visible: true,
                        onPress: this.props.navigator.jumpBack
                    },
                    right: {
                        visible: false,//是否可见
                    },
                }
                break;
            case 1:
                obj = {
                    component: Buttons,
                    title: '按钮样式',
                    left: {
                        visible: true,
                        onPress: this.props.navigator.jumpBack
                    },
                    right: {
                        visible: false,//是否可见
                    },
                }
                break;
        }

        this.props.navigator.push(obj)
    }

    render() {
        const {styles} = this.props;
        return (
            <View style={[styles.container, styles.xCenter, stylesC.container]}>
                <TouchableHighlight style={stylesC.button} onPress={this.onButtonPress.bind(this, 0)}>
                    <Text style={stylesC.text}>系统信息</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesC.button} onPress={this.onButtonPress.bind(this, 1)}>
                    <Text style={stylesC.text}>按钮样式</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const stylesC = StyleSheet.create({
    container:{
        paddingTop:20,
        backgroundColor: 'gray'
    },
    button: {
        paddingBottom:20,
    },
    text:{
        color:'black',
        fontSize:20,
    }
});
// <View style={[styles.container,styles.xyCenter,{backgroundColor:'gray'}]}>