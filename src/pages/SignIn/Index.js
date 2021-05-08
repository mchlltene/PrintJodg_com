import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Email, Logo, Password, Visibility} from '../../assets';
import {Button, Gap, Header, TextInput} from '../../components';
import firebase from '../../config/Firebase';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => navigation.replace('Home'))
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
      <Gap height={99} />
      <Logo style={styles.logo} />
      <Header title="  SIGN IN" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.sectionStyle}>
            <Email style={styles.icon} />
            <TextInput
              title="Email Address"
              placeholder="Your Email Address"
              borderForm={0}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <Gap height={12} />
          <View style={styles.sectionStyle}>
            <Password style={styles.icon} />
            <TextInput
              title="Password"
              placeholder="Password"
              borderForm={0}
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={isSecureEntry}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Visibility style={styles.iconV} />
            </TouchableOpacity>
          </View>
          <Gap height={41} />
          <Button title="SIGN IN" onPress={onSubmit} />
          <View style={styles.signUpText}>
            <Text style={styles.textSignUp}>Create new account? </Text>
            <Button
              title="Click Here"
              color="white"
              textColor="#175821"
              distance="space-between"
              onPress={() => navigation.navigate('SignUp')}
              fontsize={16}
              fontweight="300"
            />
          </View>
          <Gap height={1000} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  logo: {
    marginLeft: 91,
  },
  icon: {
    marginLeft: 23,
    marginTop: 15,
  },
  iconV: {
    marginTop: 15,
    marginLeft: 167,
  },
  sectionStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 60,
  },
  page: {
    backgroundColor: 'white',
  },
  contentWrapper: {
    paddingHorizontal: 31,
    paddingTop: 81,
  },
  textSignUp: {
    fontSize: 16,
    color: '#A7A7A7',
    fontWeight: '300', //light
  },
  signUpText: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
