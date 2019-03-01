import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SText } from './components';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
});
