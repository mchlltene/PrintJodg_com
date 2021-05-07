import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() =>{
        setTimeout(()=> {
            navigation.replace('SignIn');
        }, 3000);
    },[]);

    return (
    <View style={styles.page}>
        <Text style={styles.welcome}>WELCOME</Text>
        <Logo />
        <Text style={styles.slogan}>You Paper Our Priority</Text>
        <Text style={styles.slogan}>Order Now Printjodg.com</Text>
    </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 25,
        textShadowOffset: {width: 1},
        textShadowRadius: 7,
        textShadowColor: '#4B5C6B',
    },
    slogan: {
        color: '#D3455B',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
});