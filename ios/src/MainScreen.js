import React, { Component } from 'react';
import MainMenu from './pages/MainMenu';
import NavBar from './component/NavBar';
import {
    StyleSheet,
    Navigator,View,Text
} from 'react-native';
export default class MainScreen extends Component {
    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        // console.log('index.route:', navigator.navigationBar)
        return <route.component navigator={navigator} styles={styles}  {...route.passProps} />;
    }
    render() {
        // console.log('MainScreen212123')
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        component: MainMenu,
                        title: '主菜单',
                        navLeftShow: false,
                        navRightShow: false,
                    }}
                    configureScene={(route, routeStack)=>{return Navigator.SceneConfigs.HorizontalSwipeJump}}
                    navigationBar={<Navigator.NavigationBar
                        routeMapper={NavBar.NavigationBarRouteMapper}
                        style={{ backgroundColor: 'white'}}
                        />}
                    renderScene={this.renderScene.bind(this)}
                    sceneStyle={{ marginTop: 64 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //整个容器
    container: {
        flex: 1
    },
});