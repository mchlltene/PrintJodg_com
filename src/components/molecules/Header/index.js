import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#024529',
        fontWeight: 'bold',
    },
});