import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {
  Button,
  Gap,
  Header,
  Select,
  TextInput,
  TransactionCard,
} from '../../components';
import {Logo} from '../../assets';
import firebase from '../../config/Firebase';

const ListPesanan = ({route, navigation}) => {
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
          <Text style={styles.title}># L I S T  P E S A N A N</Text>
          <Text style={styles.subTitle}>Disini anda dapat melihat list pesanan anda !</Text>
        </View>
        <Image source={{uri: profile.photo}} style={styles.image} />
      </View>
      <Gap height={24} />
      <View style={styles.logoWrapper}>
      <View style={styles.logo}><Logo />
      <Text style={styles.text}>PrintJoDg.com</Text></View>
      </View>
      <Gap height={24} />
        <View style={styles.listPesananWrapper}>
          <Text style={styles.cardTitle}>Berikut adalah List Pesanan Anda:</Text>
          <TransactionCard />
        </View>

        <Button
          title="HOME"
          textColor="white"
          onPress={() =>
            navigation.navigate('ListPesanan', {
              title: 'List Pesanan Anda',
              uid: uid,
            })
          }
        />
      </ScrollView>
    </View>
  );
};

export default ListPesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  listPesananWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
  profileWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  logoWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
});
