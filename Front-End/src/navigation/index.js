import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen  from '../screens/AuthenticationScreen/LoginScreen'
import SignUpScreen from '../screens/AuthenticationScreen/SignupScreen';
import ConfirmEmailScreen from '../screens/AuthenticationScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/AuthenticationScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/AuthenticationScreen/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
            <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
            <Stack.Screen name="Reset Password" component={NewPasswordScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};



export default Navigation;