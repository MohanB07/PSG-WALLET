import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font';
import { useEffect } from 'react';


export default function RegisterScreen() {
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
    <Text style={styles.head}>Hello {roll}!</Text>
    <Text style={styles.text}>Looks like you are new here !  {'\n'} Let's get you set up</Text>
    <Text style={styles.mid}>We have sent an authentication mail to you ! {'\n'} Please verify from your official email id</Text>
        
    
    </View>

     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "#2b4bab",
        justifyContent: "center",
        padding: 15
       
    },
    mid:{
        textAlign:"center"
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
        
        backgroundColor:'white',
        justifyContent: 'flex-start', 
        //borderWidth: 2,
        //fontWeight:'bold',
        padding: 15,
        borderRadius: 10,
        fontFamily: 'Poppins-Bold'
    
    }
})
