import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GlobalProvider, useGlobalContext } from './context/globalContext';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ScanScreen from './screens/ScanScreen';
import SplashScreen from './screens/animation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='animate'>
          <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}} />
          <Stack.Screen name="animate" component={SplashScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}




