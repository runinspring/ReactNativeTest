 import React, {Component} from 'react';
import Sysinfo from './Sysinfo';
import Sysinfo2 from './Sysinfo2';
import {
    StyleSheet,
    StatusBar,
    View, Button, TouchableHighlight,
    Text
} from 'react-native';
export default class MainMenu extends Component {
    state={
        title:'主菜单'
    }
    onButtonPress(id) {
        // console.log('id:', id)

        switch (id) {
            case 0:
                var title = '系统信息';
                var component = Sysinfo;
                break;
            case 1:
                title = '系统信息2';
                component = Sysinfo2;
                break;
        }
        // this.props.stage.refs.nav.push({
        //     title:title,
        //     component:component
        // })
        // var obj = this.props,
        this.props.navigator.push({
            component: Sysinfo,
            title:'系统信息'
        })

    }

    render() {
        const {styles} = this.props;
        return (
            <View style={[styles.container,{backgroundColor:'gray'}]}>
                <Text>主菜单</Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this, 0)}>
                    <Text style={{color: '#000000'}}>系统信息</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

// 