import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({placeholder, borderForm=1, ...rest}) => {
    return (
        <View>
            <TextInputRN style={styles.input(borderForm)} placeholder={placeholder} {...rest} />
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    input: (borderForm) => ({
        fontSize: 18,
        borderColor: '#BAC4D3',
        paddingLeft: 13,
        paddingVertical: 20,
        borderWidth: borderForm,
    }),
});