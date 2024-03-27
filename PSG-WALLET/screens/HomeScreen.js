import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <View>
      <Text>homeScreen</Text>

      <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Account')}>
                <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>


    </View>
  )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      textAlign:'center',
      color: '#2b4bab',
      fontWeight: 'bold',
      fontSize: 16,
    },
})