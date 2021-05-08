import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home page</Text>
      <View styles={styles.container}>
        <Button
          title="About Us"
          color="orange"
          textColor="white"
          distance="space-between"
          onPress={() => navigation.navigate('About Us')}
          fontsize={20}
          fontweight="300"
        />
        <Button
          title="FormatPrint"
          color="orange"
          textColor="white"
          distance="space-between"
          onPress={() => navigation.navigate('FormatPrint')}
          fontsize={20}
          fontweight="300"
        />
        <Button
          title="Promo"
          color="orange"
          textColor="white"
          distance="space-between"
          onPress={() => navigation.navigate('Promo')}
          fontsize={20}
          fontweight="300"
          alignItems="center"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    paddingBottom: 0,
    marginHorizontal: 30,
  },
});
