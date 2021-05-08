import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Gap} from '../../components';
import firebase from '../../config/Firebase';
import {Logo} from '../../assets';

const Home = ({navigation, route}) => {
  const [profile, setProfile] = useState({});

  const {uid} = route.params;

  const getUserProfile = () => {
    firebase
      .database()
      .ref(`users/${uid}/`)
      .once('value', res => {
        const photo = `data:image/jpeg;base64, ${res.val().photo}`;
        setProfile({...res.val(), photo: photo});
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.profileWrapper}>
        <View>
          <Text style={styles.title}># H O M E</Text>
          <Text style={styles.subTitle}>Selamat Datang di Aplikasi PrintJodg.com !</Text>
        </View>
        <Image source={{uri: profile.photo}} style={styles.image} />
      </View>
      <Gap height={24} />
      <View style={styles.balanceWrapper}>
      <View style={styles.logo}><Logo />
      <Text style={styles.text}>PrintJoDg.com</Text></View>
      </View>
      <Gap height={24} />
      <View style={styles.addTransactionWrapper}>
        <Text style={styles.cardTitle}>Fitur-Fitur yang tersedia:</Text>
        <Button
          title="Promo nge-Print"
          textColor="white"
          onPress={() =>
            navigation.navigate('Promo', {
              title: 'Promo nge-Print',
              uid: uid,
            })
          }
        />
        <Gap height={16} />
        <Button
          title="Format Pemesanan"
          textColor="white"
          onPress={() =>
            navigation.navigate('Format', {
              title: 'Format Pemesanan',
              uid: uid,
            })
          }
        />
        <Gap height={16} />
        <Button
          title="List Pesanan Anda"
          textColor="white"
          onPress={() =>
            navigation.navigate('ListPesanan', {
              title: 'List Pesanan Anda',
              uid: uid,
            })
          }
        />
        <Gap height={100} />
        <Button
          title="Tentang Kami (PrintJoDg.com)"
          textColor="white"
          onPress={() =>
            navigation.navigate('AboutUs', {
              title: 'Tentang Kami',
              uid: uid,
            })
          }
        />
      </View>
      <Gap height={24} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  balanceWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },
  balance: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 18,
    marginBottom: 20,
  },
  cashOnHand: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  cashOnBank: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  addTransactionWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
    flex: 1,
  },
  amount: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
