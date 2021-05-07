import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Location} from '../../../assets'

const Header = ({title, title2, title3}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text2}>{title2}</Text>
            <TextInput style={styles.input}
            placeholder="Masukan alamat tujuan" 
            placeholderTextColor="#A7A7A7"
            />
            <Text style={styles.input2}>{title3}</Text>
        </View>

        
        
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 4,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Thin',
        marginBottom: 4,
    },
    text2: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        marginBottom: 3,
    },
    input: {
        borderWidth: 1,
        borderColor: '#BAC4D3',
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        marginBottom: 7,
        paddingLeft: 70,
        textDecorationColor: 'black',
    },
    input2: {
        borderWidth: 1,
        borderColor: '#BAC4D3',
        fontSize: 14,
        fontFamily: 'Roboto-Italic',
        marginBottom: 17,
        paddingVertical: 10,
        paddingLeft: 110,
    },
})
