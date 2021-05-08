import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Promo, SignIn, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="Promo" component={Promo} options={{headerShown: false}} />
            
        </Stack.Navigator>
    );
};

export default Router;