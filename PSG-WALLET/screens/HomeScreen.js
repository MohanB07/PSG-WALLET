import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <View>
      <Text>homeScreen</Text>

      <TouclableOpacity  onPress={navigation.navigate('')}>
        <Text> Next </Text>
      </TouclableOpacity>


    </View>

   
  )
}