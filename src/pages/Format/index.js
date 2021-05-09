import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {
  Button,
  Gap,
  Header,
  Select1,
  Select2,
  Select3,
} from '../../components';
import firebase from '../../config/Firebase';

const Format = ({route, navigation}) => {
  const {title, uid} = route.params;
  const [show, setShow] = useState(false);
  const [formatKertas, setformatKertas] = useState('HVS A4');
  const [jenisBahanKertas, setjenisBahanKertas] = useState('Art Carton 230gr');
  const [Kliping, setKliping] = useState('Tanpa Kliping');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = () => {
    // addNewTransaction();
    // updatePesanan();
    navigation.navigate('ListPesanan');
  };

  return (
    <View style={styles.page}>
      <Header title={title} onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addTransactionWrapper}>
          <Gap height={16} />
          <Select1
            label="Format Kertas"
            onSelect1Change={itemValue => setformatKertas(itemValue)}
            value={formatKertas}
          />
          <Gap height={16} />
          <Select2
            label="Jenis Bahan Kertas"
            onSelect2Change={itemValue => setjenisBahanKertas(itemValue)}
            value={jenisBahanKertas}
          />
          <Gap height={16} />
          <Select3
            label="Kliping"
            onSelect3Change={itemValue => setKliping(itemValue)}
            value={Kliping}
          />
          <Gap height={24} />
          <Button
          title="PESAN"
          textColor="white"
          onPress={() =>
            navigation.replace('ListPesanan', {
              title: 'List Pesanan Anda',
              uid: uid,
            })
          }
        />
        </View>
      </ScrollView>
    </View>
  );
};

export default Format;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  addTransactionWrapper: {
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
});
