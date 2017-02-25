/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,TextInput,
  Button,
  View
} from 'react-native';
var TEXT_REF = 'text1_reg';
export default class ios extends Component {
  state={
    sysinfo:'',
    input:''
  }
  componentDidMount(){
    // console.log('componentDidMount:')
  }
  onGetSysinfo(){
    // var out = document
    // var out = this.refs.welcome.width;
    // console.log(this.refs.welcome.style)
    // console.log(this.refs[TEXT_REF].style)
    // this.refs.welcome.innerHTML = "sdd"
    // this.refs.welcome.setNativeProps({
    //   style:{
    //     color:'blue',
    //     fontSize:30
    //   }
    // });
    this.setState({sysinfo:`宽:${width},高:${height}`})
  }
  render() {
    console.log('render',width,height)

    return (
      <View style={styles.container}>
        <Text ref='welcome' style={styles.welcome}>
          Welcome to React Native2!
        </Text>
        <TextInput ref="ipp" placeholder={"dsdfdf"}/>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title='获取系统信息'onPress={this.onGetSysinfo.bind(this)}/>
        <Text style={styles.instructions}>
          {this.state.sysinfo}
        </Text>
        <Text style={{width:100,height:100,backgroundColor:"#000000"}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ios', () => ios);
