import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text, TouchableHighlight, TouchableOpacity
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
                    <TouchableHighlight
                        underlayColor='yellow'
                        activeOpacity={0.9}
                        style={[stylesC.button1]}
                        onHideUnderlay={() => { console.log('onHideUnderlay') } }
                        onShowUnderlay={() => { console.log('onShowUnderlay') } }
                        onPress={this.onButtonPress.bind(this, 0)}>

                        <Text style={stylesC.button1Text}>按钮样式 TouchableHighlight-1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='yellow'
                        activeOpacity={0.1}
                        style={[stylesC.button1]}
                        onPress={this.onButtonPress.bind(this, 1)}>
                        <Text style={stylesC.button1Text}>按钮样式 TouchableHighlight-2</Text>
                    </TouchableHighlight>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[stylesC.button1]}
                        onPress={this.onButtonPress.bind(this, 2)}>
                        <Text style={stylesC.button1Text}>按钮样式 TouchableOpacity-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        style={[stylesC.button1]}
                        onPressIn={() => { console.log('onPressIn') } }
                        onPressOut={() => { console.log('onPressOut') } }
                        onPress={this.onButtonPress.bind(this, 3)}>
                        <Text style={stylesC.button1Text}>按钮样式 TouchableOpacity-2</Text>
                    </TouchableOpacity>
                    <TouchableHighlight
                        style={[styles.xCenter, stylesC.button2]} 
                         underlayColor='#007df0'
                        onPress={this.onButtonPress.bind(this, 4)}>
                        <Text style={stylesC.button2Text}>TouchableHighlight-3</Text>
                    </TouchableHighlight>
                </View>

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
        backgroundColor: 'rgba(0,0,0,0.4)',//背景色
        borderLeftWidth: 3,//左侧宽度
        borderLeftColor: '#000000',//左侧的颜色
        borderTopWidth: 1,
        borderTopColor: 'red',
        borderRightWidth: 5,
        borderRightColor: 'green',
        borderBottomWidth: 2,
        borderBottomColor: 'blue',

        borderStyle: 'solid',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
    button1Text: {
        color: 'red',//里面文字的样式
        fontSize: 14,
    },
    button2: {
        backgroundColor: '#5bb0ff',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
    },
    button2Text: {
        color: 'black',//里面文字的样式
        fontSize: 18,
    },
});