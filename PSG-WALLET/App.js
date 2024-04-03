import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GlobalProvider } from './context/globalContext';

import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import OtpScreen from './screens/OtpScreen';
import RegisterScreen from './screens/RegisterScreen';
import ScanScreen from './screens/ScanScreen';
import SignUpScreen from './screens/SignUpScreen';
import Animate from './screens/animation';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Animate'>
          <Stack.Screen name="Animate" component={Animate} options={{ headerShown: false}} />
          <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}} />
          <Stack.Screen name="Otp" component={OtpScreen}  options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}





