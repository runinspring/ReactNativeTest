/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MainScreen from './src/MainScreen';
import {
    NavigatorIOS,
    AppRegistry,
    // StyleSheet,
    // View,Button
} from 'react-native';

export default class ios extends Component {

    render() {
        return (
            <NavigatorIOS
                ref="nav"
                style={{flex: 1}}
                itemWrapperStyle={{//设置所有页面的属性
                    backgroundColor: "#ffffcc",
                }}

                initialRoute={{
                    component: MainScreen,
                    title: '主菜单',
                    passProps: {
                        stage: this
                    }
                }}
            />

        );
    }
}
AppRegistry.registerComponent('ios', () => ios);
