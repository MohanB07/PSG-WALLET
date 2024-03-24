import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GlobalProvider } from './context/globalContext';

import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ScanScreen from './screens/ScanScreen';
import Animate from './screens/animation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='animate'>
          <Stack.Screen name="animate" component={Animate} options={{ headerShown: false}} />
          <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}} />
          <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="account" component={AccountScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}





