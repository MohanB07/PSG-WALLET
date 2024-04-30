import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AccountScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [amount, setAmount] = useState("100"); // Set initial value as string
  const [existingAmount, setExistingAmount] = useState(100);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  useEffect(() => {
    // Load Poppins Light font
    Font.loadAsync({
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      // Add more fonts as needed
    });
  }, []);

  const handlePayment = () => {
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber < 100) {
      // Show an alert message if the entered value is not a number or less than 100
      Alert.alert("Invalid Amount", "Please enter a valid amount greater than 100.");
    } else {
      const deepLinkURL = 'exp://paymentCallback';
      const upiURL = `upi://pay?pa=bm6780735@okhdfcbank&pn=MohanB&am=${amount}&cu=INR&url=${encodeURIComponent(deepLinkURL)}`;
      Linking.openURL(upiURL).catch(() => {
        // Handle error
        console.error('Failed to open UPI payment app.');
      });
    }
  };

  useEffect(() => {
    const handleDeepLink = (event) => {
      const { url } = event;
      if (url.includes('paymentCallback')) {
        navigation.navigate('Account');
        setExistingAmount(existingAmount + parseFloat(amount));
      }
    };

    Linking.addEventListener('url', handleDeepLink);
    // No cleanup function needed here
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <View style={styles.left}>
          <FontAwesome name="user-circle-o" size={30} color="black" style={styles.logo} />
          <Text style={styles.userName}>{id}</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header, styles.col1]}>Existing Amount:</Text>
          <Text style={[styles.cell, styles.header]}> {existingAmount} </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.col1, styles.header]}>Last top-up on:</Text>
          <Text style={[styles.cell, styles.header]}>{formattedDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.col1, styles.header]}>Enter Amount</Text>
          <TextInput
            keyboardType="numeric" // Use numeric keyboard
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter Amount"
          />
        </View>
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity style={styles.actionButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay via UPI <Icon name="keyboard-arrow-right" size={20} style={styles.IconStyle} /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b4bab",
    padding: 15
  },
  headcontainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    borderRadius: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000",
  },
  buttonText: {
    fontSize: 16,
    color: '#007bff',
  },
  table: {
    paddingTop: 30,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
  },
  col1: {
    flex: 2,
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "white",
    margin: 5,
    borderRadius: 10,
  },
  header: {
    fontWeight: 'bold',
    color: "white",
    borderColor: 'white',
  },
  input: {
    flex: 1,
    borderColor: 'white',
    padding: 10,
    textAlign: 'center',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
    color: "black",
    fontWeight: "700",
    backgroundColor: "white",
  },
  actionButton: {
    alignContent: 'center',
    backgroundColor: "#DCD6F7",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginLeft: 10,
  },
  submitButton: {
    alignItems: "center",
    width: "100%",
    paddingTop: 40,
  }
});
