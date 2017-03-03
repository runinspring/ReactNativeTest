
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
export default class Sysinfo2 extends Component {
    render() {
        console.log('Sysinfo2.render')
        return (
            <View style={{
                justifyContent: 'center', //垂直居中
                alignItems: 'center',//水平居中
                flex:1
            }}>
                <Text>sysinfo bb 1</Text>
                <Text>sysinfo bbb 12</Text>
            </View>
        );
    }
}
