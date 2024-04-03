import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useGlobalContext } from '../context/globalContext';

export default function OtpScreen() {

    const navigation = useNavigation();
    const route = useRoute();
    const {id} = route.params;

    const {verifyOTP, error} = useGlobalContext();

    useEffect(() => {
      // Load Poppins Light font
      Font.loadAsync({
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        // Add more fonts as needed
      });
  }, []);

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const [Otp, setOtp] = useState({ 1:'', 2:'', 3:'', 4:''});

  const getOtp = () => {
    const { 1: digit1, 2: digit2, 3: digit3, 4: digit4 } = Otp;
    const OTP =  digit1 + digit2 + digit3 + digit4;
    return OTP;
  };

  const showAlert = () => {
    Alert.alert(
      'Wrong OTP',
      'Please enter the correct OTP.',
      [{ text: 'OK', onPress: () => navigation.navigate('Otp', {id}) }],
      { cancelable: false }
    );
  };

const verify = async () => {
      try {
        const otp = getOtp();
        console.log(otp)

        const response  = await verifyOTP(id,otp)

        console.log("from otp screen : " + response);

        if(response){
          navigation.navigate('SignUp');
        }else{
          showAlert();
        }
      } catch (error) {
        console.log("error in verifying otp")
      }
}


  return (
    <View style={styles.container}>
      <View style={styles.header} >
            <Text style={styles.head}>Hello {id}!</Text>
      </View>
      <View style={styles.insideContainer}>
            <Text style={styles.text}> To verify the OTP, {'\n'} {'\n'} please check your official email inbox. </Text>
        </View>
        <View style={styles.OtpContainer}>
            <View style={styles.OtpBox}>
              <TextInput
              style={styles.OtpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={firstInput}
              onChangeText={ (text) => {
                setOtp({...Otp, 1 : text})
                text ? secondInput.current.focus() : firstInput.current.focus()
              }}  />
            </View>
            <View style={styles.OtpBox}>
              <TextInput
              style={styles.OtpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={secondInput}
              onChangeText={ (text) => {
                setOtp({...Otp, 2 : text})
                text ?  thirdInput.current.focus() : firstInput.current.focus()
              }} />
            </View>
            <View  style={styles.OtpBox}>
              <TextInput
              style={styles.OtpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={thirdInput}
              onChangeText={ (text) => {
                setOtp({...Otp, 3 : text})
                text ? fourthInput.current.focus() : secondInput.current.focus()
              }} />
            </View>
            <View  style={styles.OtpBox}>
              <TextInput
              style={styles.OtpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={fourthInput}
              onChangeText={ (text) => {
                setOtp({...Otp, 4 : text})
                text ? fourthInput.current.focus() : thirdInput.current.focus()
              }}/>
            </View>
        </View>
        <TouchableOpacity style={styles.actionButton} onPress={()=> {getOtp(Otp), verify()}}>
        <Text style={styles.buttonText}> Verify OTP </Text>
        </TouchableOpacity>


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
   header: {
    marginTop: 25,
    marginLeft: 10,
   },
   head:{
    color: 'white',
    fontFamily: 'Poppins-Light',
    fontSize: 35
  },
  text:{
    fontSize: 15,
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Poppins-Bold',
    color:"white"
    },
    OtpContainer: {
      marginTop: 25,
      marginHorizontal: 20,
      marginBottom: 20,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    OtpBox: {
      borderRadius: 15,
      borderColor: 'white',
      borderWidth: 1,
    },
    OtpText: {
      fontSize: 25,
      padding: 0,
      textAlign: 'center',
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
    actionButton: {
      backgroundColor: "#DCD6F7",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 15,
      textAlign: 'center',
      marginTop: 20,
      marginLeft: 30,
      width: 300
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: "#424874",
        textAlign: "center",
        },
})
