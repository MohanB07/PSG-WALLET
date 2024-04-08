import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useGlobalContext } from '../context/globalContext';

export default function SignUpScreen() {
  
  const [name, setName] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const { createUser } = useGlobalContext();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  
  useEffect(() => {
    // Load fonts asynchronously
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        // Add more fonts as needed
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  

  const showAlert = (Type, Message) => {
    Alert.alert(
      Type,
      Message,
      [{ text: 'OK', onPress: () => navigation.navigate('SignUp', { id }) }],
      { cancelable: false }
    );
  };

  const validation = (name, password1, password2) => {
    if (!name || !password1 || !password2) {
      showAlert("Incomplete", "All fields are required");
      return;
    }
    if (password1 !== password2) {
      showAlert("Mismatch", "Passwords do not match");
      return;
    }
  
    saveUser(name, password1);
  };

  const saveUser = async (name, password1) => {
    try {
      const user = await createUser(id, name, password1);
      if (user) {
        setVisible(true);
        setTimeout(() => {
          navigation.navigate("Home");
          setVisible(false);
        }, 2000);
      } else {
        showAlert("Failed", "User creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.head}>Let's finish setting you up!</Text>
      </View>
      <View style={styles.insideContainer}>
        <Text style={styles.text}>Fill these in and you are good to go</Text>
      </View>

      <View style={styles.formcontainer}>
        <Text style={styles.label}>Enter user name for the App</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(data) => setName(data)}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Set your password for canteen usage</Text>
        <TextInput
          style={styles.input}
          value={password1}
          onChangeText={(data) => setPassword1(data)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={password2}
          onChangeText={(data) => setPassword2(data)}
          placeholder="Confirm your password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => validation(name, password1, password2)}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Welcome Message */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
              <Image source={require('../assets/images/icon-wallet.png')} style={styles.logo} />
              <Text style={styles.modalText}>Welcome {name}!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b4bab",
    padding: 15
  },
  insideContainer: {},
  head: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingTop: 50,
    color: 'white',
    fontFamily: 'Poppins-Light',
    fontSize: 35,
    paddingLeft: 15,
  },
  text: {
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Poppins-Bold',
    color: "white",
    fontSize: 15
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',
    color: "white",
  },
  input: {
    height: 40,
    borderColor: 'white',
    color:'white',
    fontFamily: "Poppins-Light",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  formcontainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#2b4bab',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  logo: {
    height: 150,
    width: 110,
    marginBottom: 20,
  },
});