import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Gap} from '../../components';
import firebase from '../../config/Firebase';
import {Logo} from '../../assets';

const AboutUs = ({navigation, route}) => {
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
          <Text style={styles.title}># A B O U T  U S</Text>
          <Text style={styles.subTitle}>Lebih dekat dengan PrintJoDg.com !</Text>
        </View>
        <Image source={{uri: profile.photo}} style={styles.image} />
      </View>
      <Gap height={24} />
      <View style={styles.logoWrapper}>
      <View style={styles.logo}><Logo />
      <Text style={styles.text}>PrintJoDg.com</Text></View>
      </View>
      <Gap height={24} />
      <View style={styles.aboutUsWrapper}>
        <Text style={styles.cardTitle}>
        Tentang Kami:
        </Text>

        <Text style={styles.cardTitle}>
        PrintJoDg.com adalah salah satu solusi bagi khususnya 
        Mahasiswa/i UNKLAB dalam menunjang pekerjaan kuliah mereka di sektor 'Online Print Services'.
        Jadi kami sepakat membuat aplikasi yang bernama PrintJoDg.com.
        dan, Anggota-anggota yang terlibat khususnya dalam pembuatan 
        aplikasi ini adalah: </Text>
        <Text style={styles.cardTitle}>1. Tene, Michell Gabriell</Text>
        <Text style={styles.cardTitle}>2. Sangkoy, Ester Gracela Jenifer</Text>
        <Text style={styles.cardTitle}>3. Tumulo, Septiano Rivo Chandra</Text>
        <Text style={styles.cardTitle}>4. , Virjin Fanesa</Text>
        <Text style={styles.cardTitle}>5. , Maestro Pythagoras</Text>
        <Text style={styles.cardTitle}>
        Jadi itulah kami, terimakasih atas rekan-rekan yang telah terlibat dan berusaha walaupun kami ber-5 masih tingkat 2 tapi kami telah berusaha maksimal dalam mengerjakan project ini, dan terimakasih kepada Sir. Adam Stenly yang telah memberikan ilmu dari mata-kuliah Mobile Programming yang sangat bermanfaat kepada kami.
        Sekian, Aplikasi dari PrintJoDg.com. Terimakasih :)</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

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
    flexDirection: 'row',
    textAlign: 'justify',
  },
  aboutUsWrapper: {
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
