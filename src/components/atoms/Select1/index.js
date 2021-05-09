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
          <Picker.Item label="HVS A4" value="HVS A4" />
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
