import React, {Component} from 'react';
import Sysinfo from './Sysinfo';
import Sysinfo2 from './Sysinfo2';
import {
    StyleSheet,
    StatusBar,
    View, Button, TouchableHighlight,
    Text
} from 'react-native';
export default class MainScreen extends Component {
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
        this.props.navigator.push({
            component: Sysinfo,
        })

    }

    render() {
        var styles = this.props.mainStyles;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={[styles.heading,styles.content]}>
                    <Text style={styles.headText}>主菜单</Text>
                </View>
                <TouchableHighlight style={styles.button}
                                    underlayColor="#d9d9d9"//点击后的颜色
                                    onPress={this.onButtonPress.bind(this, 0)}>
                    <Text style={{color: '#000000'}}>系统信息</Text>
                </TouchableHighlight>
                <Button title="系统信息" onPress={this.onButtonPress.bind(this, 1)}/>
            </View>
        );
    }
}