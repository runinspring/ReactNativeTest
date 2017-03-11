import React, {Component} from 'react';
import {
    StyleSheet,
    View, Text, TouchableHighlight
} from 'react-native';
export default class Buttons extends Component {
    onButtonPress(id) {
        console.log('onButtonPress:', id)
    }

    render() {
        var {styles} = this.props;
        console.log('Sysinfo2.render')
        return (
            <View style={[styles.container, styles.xCenter, stylesC.container]}>
                <View style={stylesC.buttons}>
                    <TouchableHighlight style={[stylesC.button1]}
                                        onPress={this.onButtonPress.bind(this, 0)}>
                        <Text style={stylesC.button1Text}>按钮样式 style-1</Text>
                    </TouchableHighlight>
                </View>
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
    button1:{
        backgroundColor:'rgba(0,0,0,0.4)',
        borderLeftWidth:3,
        borderLeftColor:'#000000',
        borderStyle:'solid',
        borderRadius:4,
        padding: 10,
    },
    button1Text: {
        color: 'red',
        fontSize: 12,
    },
    button2: {
        color: 'black',
        fontSize: 20,
    }
});