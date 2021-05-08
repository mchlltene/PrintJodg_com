import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>1. Format Kertas : A4</Text>
        <Text>2. Jenis Bahan Kertas : Art Carton 230gr</Text>
      </View>
      <Text>| Tanpa Laminating</Text>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 20,
    borderRadius: 8,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
});
