import React, { Component,PropTypes } from 'react';
import {
    Navigator,
    View,
    Text
} from 'react-native';
export default class NavBarCommon extends Component {
    render() {
        return (
            <View style={{height:60}}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
NavBarCommon.propTypes={
    title:PropTypes.string,
}