import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <Text style={styles.titleText}>ISS Tracker App</Text>
            </View>
        )
    }
}