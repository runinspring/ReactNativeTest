import React, { Component } from 'react';
import MainMenu from './pages/MainMenu';
// import Sysinfo from './pages/Sysinfo';
import Buttons from './pages/Buttons';
import NavBar from './component/NavBar';
import NetUtils from './lib/NetUtils';
import {
    StyleSheet,
    Navigator,View,Text
} from 'react-native';
export default class MainScreen extends Component {
    componentWillMount(){
        NetUtils.register();
    }
    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        // console.log('index.route:',route)
        return <route.component navigator={navigator} styles={styles}  {...route.passProps} />;
    }
    render() {
        console.log('MainScreen:')
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        // component: MainMenu,
                        // component: Sysinfo,
                        component: Buttons,
                        title: '主菜单',
                        left:{
                            visible:false,//是否可见
                            content:'',//显示的按钮文字
                            // onPress:function//点击后触发的方法
                        },
                        right:{
                            visible:false,//是否可见
                            // content:'',//显示的按钮文字
                        }
                    }}
                    configureScene={(route, routeStack)=>{return Navigator.SceneConfigs.HorizontalSwipeJump}}
                    navigationBar={<Navigator.NavigationBar
                        routeMapper={NavBar.NavigationBarRouteMapper}
                        style={{ backgroundColor: 'white',borderTopColor:'red'}}
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
    xCenter:{
        alignItems: 'center',//水平居中
    },
    yCenter:{
        justifyContent: 'center',//垂直居中
    },
    xyCenter:{
        alignItems: 'center',//水平居中
        justifyContent: 'center',//垂直居中
    },
});