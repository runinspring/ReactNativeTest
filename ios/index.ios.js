/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import MainScreen from './src/MainScreen';
import NavitagionBar from './src/NavBarCommon';
import {
    NavigatorIOS, StatusBar,
    Navigator,
    AppRegistry,
    Text, View,
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
        // return Navigator.SceneConfigs.HorizontalSwipeJump;//右侧横向滑入
        return Navigator.SceneConfigs.FadeAndroid;//右侧横向滑入
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
        console.log('index.route:', route)
        // console.log('renderScene',route.)
        // this.setState({title:route.title})
        // console.log(77878,)
        // route.stage.setState({title:route.title})
        // console.log(route.stage.state)
        // console.log('route:',this)
        return <route.component navigator={navigator} styles={styles}  {...route.passProps} />;
    }
    /**
     * 顶部导航器的样式
     */
    NavigationBarRouteMapper = {
        LeftButton: function (route, navigator, index, navState) {
            if (!route.navRightShow) {
                return <Text></Text>
            }else{
                return <Text style={[styles.navButton, { marginLeft: 4 }]}>&lt;Left</Text>
            }
        },
        RightButton: function (route, navigator, index, navState) {
            if (!route.navRightShow) {
                return <Text></Text>
            } else {
                return <Text style={[styles.navButton, { marginRight: 4 }]}>Right&gt;</Text>
            }
        },
        Title: function (route, navigator, index, navState) {
            return <Text style={styles.navButton}>{route.title}</Text>
        }
    }
    render() {
        return (
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <StatusBar barStyle="dark-content" />
                <Navigator
                    style={styles.container}
                    initialRoute={{
                        component: MainScreen,
                        title: '主菜单',
                        navLeftShow: false,
                        navRightShow: false,
                    }}
                    navigationBar={<Navigator.NavigationBar
                        routeMapper={this.NavigationBarRouteMapper}
                        style={{ backgroundColor: 'white' }}
                        />}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene.bind(this)}
                    sceneStyle={{ marginTop: 64 }}
                    />
            </View>
        );
    }
}
// <StatusBar barStyle="light-content" />
const styles = StyleSheet.create({
    //整个容器
    container: {
        flex: 1,
    },
    content: {//居中的内容
        justifyContent: 'center',//垂直居中
        alignItems: 'center',//水平居中
    },
    navButton: {
        paddingTop: 13,
    },
    // 导航栏
    hdeading: {
        height: 50,
        paddingTop: 20,
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
