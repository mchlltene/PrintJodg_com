import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const index = ({value, label, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.text}> {label} </Text>
      <View style={styles.input}>
        <Picker
          style={styles.input}
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="Art Carton 230gr" value="Art Carton 230gr" />
          <Picker.Item label="Art Paper 150gr" value="Art Paper 150gr" />
        </Picker>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
  },
});
