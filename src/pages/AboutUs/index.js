import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>Tentang Kami</Text>
        <Text style={styles.subHeader}>www.PrintJoDg.com</Text>
        <Text style={styles.kelompok}>KELOMPOK 5 - MObile Programming</Text>

        <View>
          <Text style={styles.listKelompok}>● Tene, Michell Gabriell</Text>
          <Text style={styles.listKelompok}>
            ● Sangkoy, Ester Gracela Jenifer
          </Text>
          <Text style={styles.listKelompok}>
            ● Tumulo, Septiano Rivo Chandra
          </Text>
          <Text style={styles.listKelompok}>● Virjin Fanesa</Text>
          <Text style={styles.listKelompok}>● Maestro Phytagoras</Text>
        </View>

        <Text style={styles.contactUs}>Hubungi Kami di :</Text>
        <Text style={styles.contactUs}>081388505689 - Maestro</Text>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  box: {
    borderWidth: 5,
    borderColor: '#BAC4D3',
    marginHorizontal: 24,
    paddingVertical: 13,
    paddingHorizontal: 5,
  },

  header: {
    textAlign: 'center',
    fontSize: 17,
    paddingBottom: 15,
  },
  subHeader: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 45,
  },
  kelompok: {
    fontSize: 17,
    textAlign: 'center',
    paddingBottom: 15,
  },
  listKelompok: {
    fontSize: 17,
    padding: 10,
  },
  contactUs: {
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '700',
  },
});
