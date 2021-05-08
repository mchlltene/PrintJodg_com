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

const AddTransaction = ({route, navigation}) => {
  const {title, uid} = route.params;
  // const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [transactionType, setTransactionType] = useState('Debit');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const [balance, setBalance] = useState({
    cashOnHand: 0,
    cashOnBank: 0,
    totalBalance: 0,
  });

  useEffect(() => {
    getUserBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserBalance = () => {
    firebase
      .database()
      .ref(`balance/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setBalance(res.val());
        }
      });
  };

  const updateBalance = () => {
    let cashOnHand = 0;
    let cashOnBank = 0;
    let totalBalance = 0;
    if (title === 'Cash On Hand') {
      if (transactionType === 'Debit') {
        cashOnHand = Number(balance.cashOnHand) + Number(amount);
        totalBalance = Number(balance.totalBalance) + Number(amount);
      } else {
        cashOnHand = Number(balance.cashOnHand) - Number(amount);
        totalBalance = Number(balance.totalBalance) - Number(amount);
      }
      firebase.database().ref(`balance/${uid}`).set({
        totalBalance: totalBalance,
        cashOnHand: cashOnHand,
        cashOnBank: balance.cashOnBank,
      });
    } else {
      if (transactionType === 'Debit') {
        cashOnBank = Number(balance.cashOnBank) + Number(amount);
        totalBalance = Number(balance.totalBalance) + Number(amount);
      } else {
        cashOnBank = Number(balance.cashOnBank) - Number(amount);
        totalBalance = Number(balance.totalBalance) - Number(amount);
      }
      firebase.database().ref(`balance/${uid}`).set({
        totalBalance: totalBalance,
        cashOnHand: balance.cashOnHand,
        cashOnBank: cashOnBank,
      });
    }
  };

  const addNewTransaction = () => {
    const data = {
      description: description,
      type: transactionType,
      amount: amount,
    };
    if (title === 'Cash On Hand') {
      firebase.database().ref(`transactions/${uid}/cashOnHand/`).push(data);
    } else {
      firebase.database().ref(`transactions/${uid}/cashOnBank/`).push(data);
    }

    setDescription('');
    setAmount('');
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onSubmit = () => {
    addNewTransaction();
    updateBalance();
    navigation.navigate('ListPesanan');
  };

  return (
    <View style={styles.page}>
      <Header title={title} onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addTransactionWrapper}>
          <Gap height={16} />
          <TextInput
            title="Description"
            placeholder="Add the description"
            value={description}
            onChangeText={value => setDescription(value)}
          />
          <Gap height={16} />
          <Select
            label="Transaction Type"
            onSelectChange={itemValue => setTransactionType(itemValue)}
            value={transactionType}
          />
          <Gap height={16} />
          <TextInput
            title="Amount"
            placeholder="Add the amount"
            value={amount}
            onChangeText={value => setAmount(value)}
          />
          <Gap height={24} />
          <Button title="Save" onPress={onSubmit} />
        </View>
        <Gap height={24} />
        <View style={styles.addTransactionWrapper}>
          <Text style={styles.cardTitle}>Last Transaction</Text>
          <TransactionCard />
          <TransactionCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddTransaction;

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
