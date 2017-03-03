/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import MainScreen from './src/MainScreen';
import {
    AppRegistry,
    View,
} from 'react-native';

export default class ios extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <MainScreen/>
            </View>
        );
    }
}
AppRegistry.registerComponent('ios', () => ios);
