import React from 'react'
import { StyleSheet, View, TouchableOpacity, onPress, Text } from 'react-native'
import { Header } from '../../components'
import Logo from '../../assets/ilustrations/logo.svg';
import Gambar from '../../assets/ilustrations/promo.svg';
import Gambar2 from '../../assets/ilustrations/gambar2.svg';


const HomeUser = ({navigation}) => {
    return (
        <View style={styles.hum}>
            <View>
                <Header 
                    title="Hai, Michelle" 
                    title2="Cetakannya dikirim kemana?" 
                    title3="Keterangan"
                />
        </View>
        <View style={styles.row}>
            <View style={styles.inputWrap}>
                <Text style={styles.label1}>Promo Ngeprint</Text>
                <Gambar />
        </View>
        <View style={styles.inputWrap2}>
       <TouchableOpacity onPress={()=>navigation.navigate('Promo')}>
            <Text style={styles.label2}>Selengkapnya</Text>
            </TouchableOpacity>
            <Gambar2 />
        </View>
      </View>
   
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.format}>FORMAT PRINT</Text>
            </TouchableOpacity>
        </View>
              <View style={styles.promo}>
                <Logo />
                <View>
                <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>TENTANG KAMI</Text>  
                </TouchableOpacity>
                </View>
        </View>        
        </View>
      
    )
}

export default HomeUser;

const styles = StyleSheet.create({
    hum: {
        flex: 1,
    },
    text: {
        flex1:1,
        fontSize: 16,
        fontFamily: 'Roboto-Thin',
    },
    text2: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
    },
    format: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        backgroundColor: 'white',
        paddingLeft: 32,
        paddingVertical: 15,
        color: '#4A48B6',
       paddingLeft: 135,
    },
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
    row: {
        flex: 1,
        marginTop: 8,
        flexDirection: "row",
        backgroundColor: 'white'
        
      },
      inputWrap: {
        paddingLeft:32,
      flex: 1,
      marginBottom: 5,
    },
    inputWrap2: {
        paddingLeft: 90,
      flex: 1,
      marginBottom: 5,
    },
    label1: {
        padding: 10,
        backgroundColor: 'white',
        paddingLeft: 0,
        fontSize: 14,
      },
      label2: {
        padding: 10,
        backgroundColor: 'white',
        paddingLeft: 0,
        fontSize: 14,
        color: '#4A48B6',
        },
});