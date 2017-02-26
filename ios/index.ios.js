/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import MainScreen from './src/MainScreen';
import {
    NavigatorIOS,
    Navigator,
    AppRegistry,
    Text,
    StyleSheet,
    // View,Button
} from 'react-native';

export default class ios extends Component {
    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.HorizontalSwipeJump;//右侧横向滑入
        // console.log('route.type',route.type)
        // if (route.type == 'Bottom') {
        //     return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        // }
        // return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator} mainStyles={styles}  {...route.passProps} />;
    }

    render() {
        console.log(11)
        return (
            <Navigator
                style={{flex: 1}}
                initialRoute={{
                    component: MainScreen,
                }}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />

        );
    }
}
const styles = StyleSheet.create({
    //整个容器
    container: {
        flex: 1,
    },
    content:{//居中的内容
        justifyContent: 'center',//垂直居中
        alignItems: 'center',//水平居中
    },
    // 导航栏
    heading: {
        height:50,
        paddingTop:20,
        backgroundColor: '#ff1046',
        marginBottom: 10,
        alignItems: 'center',//水平居中
    },
    // 导航栏文字
    headText: {
        color: '#ffffff',
        fontSize: 22,
    },
    button: {
        padding: 10,
        borderColor: 'blue',
        // borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00ff00'
    },
});
AppRegistry.registerComponent('ios', () => ios);
/*
 <Navigator
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
 />*/
