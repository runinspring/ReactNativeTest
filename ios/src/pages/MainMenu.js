import React, { Component } from 'react';
import Sysinfo from './Sysinfo';
import Sysinfo2 from './Sysinfo2';
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
                    component: Sysinfo2,
                    title: '系统信息2',
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
            <View style={[styles.container, styles.xCenter, { backgroundColor: 'gray' }]}>
                <TouchableHighlight onPress={this.onButtonPress.bind(this, 0)}>
                    <Text style={{ color: '#000000' }}>系统信息</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onButtonPress.bind(this, 1)}>
                    <Text style={{ color: '#000000' }}>系统信息2</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

// <View style={[styles.container,styles.xyCenter,{backgroundColor:'gray'}]}>