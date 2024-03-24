import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function AccountScreen() {

    const navigation = useNavigation();

  return (
    <View>
      <Text> AccountScreen </Text>

      <TouclableOpacity  onPress={navigation.navigate('')}>
        <Text> Next </Text>
      </TouclableOpacity>


    </View>

   
  )
}