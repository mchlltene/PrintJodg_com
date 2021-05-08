import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';
import { Gap } from '../../components';

const Promo = () => {
    return (
        <View style={styles.page}>
            <Gap height={70} />
            <Logo width={200} height={150} />
            <Gap height={7} />
            <View style={styles.contentWrapper}>
                <Gap height={19} />
                <Text style={styles.textPromo}>P R O M O</Text>
            </View>
        </View>
    );
};

export default Promo;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentWrapper: {
        alignItems: 'center',
        height: 390,
        width: 300,
        borderWidth: 5,
        borderColor: '#BAC4D3',
    },
    textPromo: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 17,
    },
});