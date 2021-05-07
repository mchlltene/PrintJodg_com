import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Sharp from '../../assets/icons/sharp_person_black_48 1.svg';

const Profile = () => {
    return (
        <View style={styles.pertama}>
            <View style={styles.userLogo}>
            <Sharp />
            <Text style={styles.text}>Selamat Datang,</Text>
            <Text style={styles.text2}>Michelle Tene</Text>
            <Text style={styles.text3}>0896-1231-2465</Text>
        </View>
        <View>
            <Text style={styles.riwayatText}>Riwayat Aktivitas</Text>
            <Text style={styles.riwayatText2}>Hari ini</Text>
            <Text style={styles.riwayatText3}>Print Document</Text>
            <Text style={styles.riwayatText4}>23 Maret 2021</Text>
            <Text style={styles.riwayatText5}>Print Warna</Text>
        </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    pertama: {
        paddingHorizontal: 24,
        flex: 1,

    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    text2: {
        fontFamily: 'Roboto-Bold',
        fontSize: 19,
    },
    text3: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        marginBottom: 16,
    },
    userLogo: {
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    riwayatText: {
        marginTop: 37,
        fontSize: 15,
        fontFamily: 'Roboto-Thin',
        marginBottom: 7,
        paddingLeft: 14,
    },
    riwayatText2: {
        marginTop: 15,
        fontSize: 15,
        fontFamily: 'Roboto-Thin',
        marginBottom: 7,
        paddingLeft: 14,
        color: '#665656',
    },
    riwayatText3: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        marginBottom: 15,
        paddingLeft: 14,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#BAC4D3',
    },
    riwayatText4: {
        marginTop: 59,
        fontSize: 14,
        fontFamily: 'Roboto-Thin',
        marginBottom: 15,
        paddingLeft: 14,
        color: '#665656',
    },
    riwayatText5: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        marginBottom: 15,
        paddingLeft: 14,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#BAC4D3',
    },
})
