import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photoUri, setPhotoUri] = useState('');
  const [photoBase64, setPhotoBase64] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getImage = () => {
    launchImageLibrary(
      {maxWidth: 200, maxHeight: 200, includeBase64: true},
      res => {
        console.log('respons, ', res);
        if (res.didCancel) {
          setHasPhoto(false);
        } else {
          setPhotoUri(res.uri);
          setPhotoBase64(res.base64);
          setHasPhoto(true);
        }
      },
    );
  };

  const onSubmit = () => {
    if (fullName === '' || email === '' || password === '') {
      showMessage({
        message: 'Please complete the form',
        type: 'default',
        backgroundColor: '#D9435E', // background color
        color: 'white', // text color
      });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          const data = {
            fullName: fullName,
            email: email,
            photo: photoBase64,
          };

          firebase.database().ref(`users/${res.user.uid}`).set(data);
          setFullName('');
          setEmail('');
          setPassword('');
          navigation.navigate('SignIn');
        })
        .catch(error => {
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: '#D9435E', // background color
            color: 'white', // text color
          });
        });
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.avatarWrapper}>
            <View style={styles.borderAvatar}>
              <TouchableOpacity onPress={getImage}>
                {hasPhoto && (
                  <Image source={{uri: photoUri}} style={styles.avatar} />
                )}
                {!hasPhoto && (
                  <View style={styles.addPhoto}>
                    <Text style={styles.textAddPhoto}>Add Photo</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={16} />
          <TextInput
            title="Nama Lengkap"
            placeholder="Type your full name"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={16} />
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
          <Gap height={24} />
          <Button 
          title="DAFTAR"
          textColor="white"
          onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

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
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  textAddPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    maxWidth: 40,
    textAlign: 'center',
  },
  borderAvatar: {
    height: 110,
    width: 110,
    borderRadius: 110,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
});
