import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {

    const navigation = useNavigation();

  return (
    <View>
      <Text> AccountScreen </Text>

      {/* <TouchableOpacity  onPress={ () => navigation.navigate('account')}>
        <Text> Next </Text>
      </TouchableOpacity> */}


    </View>

   
  )
}