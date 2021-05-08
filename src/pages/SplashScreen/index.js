import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';


const SplashScreen = ({navigation}) => {
    
    useEffect(() =>{
        setTimeout(()=> {
            navigation.replace('SignIn');
        }, 3000);
    },[]);

    return (
        <View style={styles.page}>
        <Text style={styles.textWelcome}>  WELCOME</Text>
        <Logo/>
        <Text style={styles.text}>You Paper Our Priority</Text>
        <Text style={styles.text}>Order Now Printjodg.com</Text>
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
    textWelcome: {
        fontSize: 25,
        textShadowOffset: {height: 2},
        textShadowRadius: 5,
        textShadowColor: '#4B5C6B',
    },
    text: {
        color: '#D3455B',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
});