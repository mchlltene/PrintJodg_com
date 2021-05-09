import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Gap} from '../../components';
import firebase from '../../config/Firebase';
import {Logo} from '../../assets';

const Promo = ({navigation, route}) => {
  const [profile, setProfile] = useState({});
  const {title, uid} = route.params;

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
        <Header title={title} onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.profileWrapper}>
        <View>
          <Text style={styles.title}># P R O M O</Text>
          <Text style={styles.subTitle}>Temukan promosi terbaru dari PrintJoDg.com !</Text>
        </View>
        <Image source={{uri: profile.photo}} style={styles.image} />
      </View>
      <Gap height={24} />
      <View style={styles.logoWrapper}>
      <View style={styles.logo}><Logo />
      <Text style={styles.text}>PrintJoDg.com</Text></View>
      </View>
      <Gap height={24} />
      <View style={styles.promoWrapper}>
        <Text style={styles.cardTitle}>Promo-promo yang tersedia:</Text>
        <Text style={styles.cardTitle}>1.) Virjin Mengantar dengan senyuman jika pembelian diatas Rp. 20.000</Text>
        <Text style={styles.cardTitle}>2.) Virjin Mengantar secara free jika anda telah membeli sebanyak 10x</Text>
        <Text style={styles.cardTitle}>3.) Vi</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Promo;

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
  logoWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },
  promoWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
    flex: 1,
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
