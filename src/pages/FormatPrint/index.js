import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const FormatPrint = ({onPress, navigation}) => {
    return (
        <View>
                   <TouchableOpacity onPress={onPress}>
                   <Text style={styles.promo}>FORMAT PRINT</Text>

        </TouchableOpacity>
        </View>
    );
};

export default FormatPrint;

const styles = StyleSheet.create({
   promo: {
       marginTop: 8,
       fontSize: 14,
       fontFamily: 'Roboto-Bold',
       backgroundColor: 'white',
       paddingLeft: 32,
       paddingVertical: 15,
       color: '#4A48B6',
      paddingLeft: 135,
   },
});
