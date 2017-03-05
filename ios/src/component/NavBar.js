//导航条的样式
import React, { Component } from 'react';
import {
    Text,StyleSheet
} from 'react-native';
exports.NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        if (!route.navLeftShow) {
            return <Text></Text>
        } else {
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
        console.log(444,route.title)
        return <Text style={[styles.navButton,styles.title]}>{route.title}</Text>
    }
}
const styles = StyleSheet.create({
    navButton: {
        paddingTop: 13,
    },
    title:{
        // fontSize:20,
    }
})