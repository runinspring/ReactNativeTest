import React, {Component} from 'react';
import Sysinfo from './Sysinfo';
import Sysinfo2 from './Sysinfo2';
import {
    View, Button,
    Text
} from 'react-native';
export default class MainScreen extends Component {
    onButtonPress(id) {
        // console.log('id:', id)

        switch (id){
            case 0:
                var title = '系统信息';
                var component = Sysinfo;
                break;
            case 1:
                title = '系统信息2';
                component = Sysinfo2;
                break;
        }
        this.props.stage.refs.nav.push({
            title:title,
            component:component
        })

    }

    render() {
        // console.log('MainScreen.render')
        // console.log('prop', this.props.parent.refs.nav)
        return (
            <View style={{
                marginTop:65,
            }}>
                <Button color="#841584" title="系统信息" onPress={this.onButtonPress.bind(this,0)}/>
                <Button title="系统信息2" onPress={this.onButtonPress.bind(this, 1)}/>
            </View>
        );
    }
}

// {/*justifyContent: 'center',*/}