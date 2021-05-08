import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {
  Button,
  Gap,
  Header,
  Select,
  TextInput,
  TransactionCard,
} from '../../components';
import firebase from '../../config/Firebase';

const Format = ({route, navigation}) => {
  const {title, uid} = route.params;
  const [show, setShow] = useState(false);
  const [jenisBahanKertas, setjenisBahanKertas] = useState('Art Carton 230gr');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = () => {
    // addNewTransaction();
    // updatePesan();
    navigation.navigate('ListPesanan');
  };

  return (
    <View style={styles.page}>
      <Header title={title} onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addTransactionWrapper}>
          <Gap height={16} />
          <TextInput
            title="Format Kertas"
            placeholder="Add the description"
            value={description}
            onChangeText={value => setDescription(value)}
          />
          <Gap height={16} />
          <Select
            label="Jenis Bahan Kertas"
            onSelectChange={itemValue => setjenisBahanKertas(itemValue)}
            value={jenisBahanKertas}
          />
          <Gap height={16} />
          <TextInput
            title="Kliping"
            placeholder="Add the amount"
            value={amount}
            onChangeText={value => setAmount(value)}
          />
          <Gap height={24} />
          <Button
          title="PESAN"
          textColor="white"
          onPress={() =>
            navigation.navigate('ListPesanan', {
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
