import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';
import { Visibility, Email, Logo, Password, Profile } from '../../assets';

const SignUp = ({navigation}) => {
  const [photoUri, setPhotoUri] = useState('');
  const [photoBase64, setPhotoBase64] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry,setIsSecureEntry] = useState(true);

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
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header title="# SIGN UP"/>
        <View style={styles.contentWrapper} >
           <View style={styles.avatarWrapper}>
               <View style={styles.border}>
                   <TouchableOpacity onPress={getImage} activeOpacity={0.5}>
                       {
                           hasPhoto && <Image source={{uri: photoUri}} style={styles.avatar} />
                       }
                       {!hasPhoto && (
                        <View style={styles.addPhoto}>
                            <Text style={styles.textAddPhoto}>Add Photo</Text>
                        </View>
                       )}
                    </TouchableOpacity>
               </View>
           </View>
           <Gap height={1} />
           <View style={styles.sectionStyle}>
                <Profile style={styles.icon}/>
            <TextInput title="Full Name" placeholder="Your Full Name" borderForm={0} value={fullName} onChangeText={value => setFullName(value)} />
            </View>
            <Gap height={12} />
            <View style={styles.sectionStyle}>
                <Email style={styles.icon} />
                <TextInput title="Email Address" placeholder="Email" borderForm={0} value={email} onChangeText={value => setEmail(value)} />
            </View>
            <Gap height={12} />
            <View style={styles.sectionStyle}>
                <Password style={styles.icon} />
                <TextInput title="Password" placeholder="Password" borderForm={0} value={password} onChangeText={value => setPassword(value)} secureTextEntry={isSecureEntry} />
                <TouchableOpacity onPress={() => {
                    setIsSecureEntry((prev) => !prev)
                }} >
                    <Visibility style={styles.iconV}/>
                </TouchableOpacity>
            </View>
            <Gap height={40} />
            <Button title="DAFTAR" onPress={onSubmit} />
            <View style={styles.signInText}>                    
                <Button title="Sign In" color="white" textColor="#175821" distance='space-between' onPress={()=>navigation.navigate('SignIn')} fontsize={16} fontweight='300' />
                <Text style={styles.textSignIn}> dengan akun anda.</Text>
            </View>
        </View>
        </ScrollView>
    </View>
);
};

export default SignUp;

const styles = StyleSheet.create({
page: {
    backgroundColor: 'white',
    flex: 1,
},
logo: {
    alignItems: 'center',
},
addPhoto: {
    width: 90,
    height: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
},
contentWrapper: {
    flex: 1,
    paddingHorizontal: 31,
},
textAddPhoto: {
    fontSize: 14,
    maxWidth: 40,
    textAlign: 'center',
},
border: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
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
avatarWrapper: {
    paddingLeft: 12,
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 19,
},
textSignIn: {
    fontSize: 16,
    color: '#A7A7A7',
    fontWeight: '300', //light
},
signInText: {
    justifyContent: 'center',
    flexDirection: 'row',
},
avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
},
text: {
  textAlign: 'center',
  fontSize: 30,
  // fontFamily: 'Poppins-Medium',
},
});