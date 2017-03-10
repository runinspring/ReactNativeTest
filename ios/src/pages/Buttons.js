
import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text,TouchableHighlight
} from 'react-native';
export default class Buttons extends Component {
    onButtonPress(id) {
        console.log('onButtonPress:',id)
    }
    render() {
        var {styles} = this.props;
        console.log('Sysinfo2.render')
        return (
            <View style={[styles.container, styles.xCenter, stylesC.container]}>
                <TouchableHighlight style={stylesC.buttons} onPress={this.onButtonPress.bind(this, 0)}>
                    <Text style={stylesC.button1}>按钮样式 style-1</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesC.buttons} onPress={this.onButtonPress.bind(this, 0)}>
                    <Text style={stylesC.button2}>按钮样式 style-2</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const stylesC = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    buttons: {
        paddingBottom: 20,
    },
    button1: {
        color: 'red',
        fontSize: 12,
    },
    button2: {
        color: 'black',
        fontSize: 20,
    }
});