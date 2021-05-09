import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp, SplashScreen, Home, AddTransaction, Format, Promo, AboutUs, ListPesanan} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Format"
        component={Format}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Promo"
        component={Promo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListPesanan"
        component={ListPesanan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
