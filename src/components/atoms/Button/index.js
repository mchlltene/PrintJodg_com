import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({title, distance='center', fontweight='bold', color='#06623B', textColor='#FFFFFF', onPress, fontsize=18}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={styles.container(color,distance)}>
                <Text style={styles.text(textColor, fontsize, fontweight)}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: (color, distance) => ({
        height: 60,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: distance,
        borderRadius: 12,
       
    }),
    text: (textColor, fontsize, fontweight) => ({
        fontSize: fontsize,
        color: textColor,
        fontWeight: fontweight,
    }),
});

