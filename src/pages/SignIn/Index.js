import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';
import {Logo} from '../../assets';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        navigation.navigate('Home', {
          uid: res.user.uid,
        });
      })
      .catch(error =>
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#D9435E', // background color
          color: 'white', // text color
        }),
      );
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
      <View style={styles.logo}><Logo />
      <Text style={styles.text}>PrintJoDg.com</Text></View>
        <Gap height={50} />
        <TextInput
          title="Email Address"
          placeholder="Masukkan e-mail anda"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput
          title="Password"
          placeholder="Masukkan password anda"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <Gap height={50} />
        <Button 
        title="SIGN IN"
        textColor="white"
        onPress={onSubmit} 
        />
        <Gap height={12} />
        <Button
          title="SIGN UP"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
