import React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import * as Font from 'expo-font';
import { useEffect } from 'react';
import { useState } from 'react';



export default function LoginScreen() {

  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

    var roll = "23MX103"
    useEffect(() => {
        // Load Poppins Light font
        Font.loadAsync({
          'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
          'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
          // Add more fonts as needed
        });
      }, []);
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
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Set your password for canteen usage</Text>
        <TextInput
          style={styles.input}
          value={password1}
          onChangeText={setPassword1}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={password2}
          onChangeText={setPassword2}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableOpacity  style={styles.button}>
                <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
         
      </View>
    
    </View>

     
    )
}

const styles = StyleSheet.create({

  //entire container
  container: {
    flex: 1,
    // borderWidth:2,
    // borderColor:'white',
    backgroundColor: "#2b4bab",
    // justifyContent: "center",
    padding: 15
   
  },
    
    //two lines in header
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