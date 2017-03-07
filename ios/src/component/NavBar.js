//导航条的样式
import React, { Component } from 'react';
import {
    Text, StyleSheet
} from 'react-native';
exports.NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        var left = route.left;
        var content = '<返回';
        if (left && left.content) content = left.content;
        if (left && !left.visible) {
            return null;
        } else {
            return <Text style={[styles.navButton, { marginLeft: 4 }]} onPress={left.onPress}>{content}</Text>
        }
    },
    RightButton: function (route, navigator, index, navState) {
        var right = route.right;
        var content = 'Right>';
        if (right && right.content) content = right.content;
        if (right && !right.visible) {
            return null;
        } else {
            return <Text style={[styles.navButton, { marginLeft: 4 }]}>{content}</Text>
        }
    },
    Title: function (route, navigator, index, navState) {
        return <Text style={[styles.navButton, styles.title]}>{route.title}</Text>
    }
}
const styles = StyleSheet.create({
    navButton: {
        paddingTop: 13,
    },
    title: {
        // fontSize:20,
    }
})