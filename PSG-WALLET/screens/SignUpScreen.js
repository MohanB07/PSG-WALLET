import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useGlobalContext } from '../context/globalContext';


export default function LoginScreen() {
  
  const [name, setName] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const {createUser, error} = useGlobalContext();

  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  
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
      [{ text: 'OK', onPress: () => navigation.navigate('SignUp', {id}) }],
      { cancelable: false }
    );
  };

  const validation = (name, password1, password2) => {
    if (!name) {
      showAlert("Incomplete", "Name field is required");
      return;
    }
    if (!password1) {
      showAlert("Incomplete", "Password is required");
      return;
    }
    if (!password2) {
      showAlert("Incomplete", "Confirm password is required");
      return;
    }
    if (password1 !== password2) {
      showAlert("Mismatch", "Passwords do not match");
      return;
    }
  
    saveUser(name, password1);
  };


  const saveUser = async (name,password1) => {
        try {

          const user  = await createUser(id,name,password1)

          if (user) {
            navigation.navigate("Home");
          }
          else {
            showAlert("failed", "user creation failed");
          }
        } catch (error) {
          console.log(error);
        }
  }

    return (
    <View style={styles.container}>
        <View style={styles.insideContainer} >
            <Text style={styles.head}>Lets finish setting you up !</Text>
        </View>
        <View style={styles.insideContainer}>
            <Text style={styles.text}>Fill these in and you are good to go</Text>
        </View>
        

      <View style={styles.formcontainer}>
        <Text style={styles.label}>Enter user name for the App</Text>
        <TextInput
          style={styles.input}
          defaultValue={name}
          onChangeText={ (data) => {
            setName(data);
          }}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Set your password for canteen usage</Text>
        <TextInput
          style={styles.input}
          value={password1}
          onChangeText={ (data) => {
            setPassword1(data);
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={password2}
          onChangeText={ (data) => {
            setPassword2(data);
          }}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableOpacity  style={styles.button} onPress={() => validation(name, password1, password2)}>
                <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // borderWidth:2,
    // borderColor:'white',
    backgroundColor: "#2b4bab",
    // justifyContent: "center",
    padding: 15
   
  },
    
    insideContainer:{
        // borderWidth:2,
        // borderColor:'black',
    },
    insideContainerMid:{
        // borderWidth:2,
        // borderColor:'black',
        marginTop:'50%'
    },
    mid:{
       
        textAlign:"center",
        color:"white",
        fontFamily: 'Poppins-Light',
        fontSize:15
    },
    head: {
        
        justifyContent: 'flex-start',
        textAlign: 'left',
        paddingTop: 50,
        color:'white',
        fontFamily: 'Poppins-Light',
        fontSize:35,
        //borderWidth: 2,
        paddingLeft: 15,
        

    },
    text:{
        
        
        //borderWidth: 2,
        //fontWeight:'bold',
        padding: 15,
        borderRadius: 10,
        fontFamily: 'Poppins-Bold',
        color:"white",
        fontSize:15
    
    },
    //form styles
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontFamily: 'Poppins-Bold',
      color:"white",
    },
    input: {
      height: 40,
      borderColor: 'white',
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
      textAlign:'center',
      color: '#2b4bab',
      fontWeight: 'bold',
      fontSize: 16,
    },
})