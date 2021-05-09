import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBack} from '../../../assets';
import {Gap} from '../../atoms';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Gap width={26} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingVertical: 38,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
});
