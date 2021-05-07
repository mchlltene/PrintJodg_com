import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Logo from '../../assets/ilustrations/logo.svg';

const TentangKami = ({onPress}) => {
    return (
            <TouchableOpacity onPress={onPress}>
              <View style={styles.promo}>
                <Logo />
                <View>
                <Text  style={styles.text}>TENTANG KAMI</Text>  
                </View>
       
        </View>
        </TouchableOpacity>
    );
};

export default TentangKami;

const styles = StyleSheet.create({
   promo: {
       marginTop: 8,
       backgroundColor: 'white',
       paddingLeft: 120,
   },
   text: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 14,
    backgroundColor: 'white',
   paddingLeft: 15,
   color: '#4A48B6',
   fontFamily: 'Roboto-Bold',
   },
});
