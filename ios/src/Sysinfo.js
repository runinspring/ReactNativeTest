
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
export default class Sysinfo extends Component {
    render() {
        console.log('Sysinfo.render')
        return (
            <View style={{
                marginTop:100,
                alignItems: 'center',//水平居中
            }}>
                <Text>sysinfo1</Text>
                <Text>sysinfo2</Text>
                <Text>sysinfo3</Text>
                <Text>sysinfo4</Text>
                <Text>sysinfo5</Text>
                <Text>sysinfo6</Text>
            </View>
        );
    }
}

// justifyContent: 'top', //垂直居中
