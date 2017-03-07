
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
export default class Sysinfo2 extends Component {
    render() {
        var {styles} = this.props;
        console.log('Sysinfo2.render')
        return (
            <View style={[styles.container, styles.xCenter]}>
                <Text onPress={() => {
                    this.props.navigator.jumpBack();//跳转回来
                } }>&lt;返回</Text>
                <Text>sysinfo bb 1</Text>
                <Text>sysinfo bbb 12</Text>
            </View>
        );
    }
}
