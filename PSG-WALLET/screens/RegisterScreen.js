import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGlobalContext } from '../context/globalContext';


export default function RegisterScreen() {

    const navigation = useNavigation();
    const route = useRoute();
    const {id} = route.params;

    const {sendEmail, error} = useGlobalContext();

    useEffect(() => {
        // Load Poppins Light font
        Font.loadAsync({
          'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
          'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
          // Add more fonts as needed
        });
      }, []);


      const email = async (id) => {
        try {
            // console.log("id from mail func", id);
            await sendEmail(id);
        } catch (error) {
            console.log("error in sending mail");
        }
      }



    return (
    <View style={styles.container}>
        <View style={styles.insideContainer} >
            <Text style={styles.head}>Hello {id}!</Text>
        </View>
        <View style={styles.insideContainer}>
            <Text style={styles.text}>Looks like you are new here !  {'\n'} Let's get you set up</Text>
        </View>
        <View style={styles.insideContainerMid}>
            <Text style={styles.mid}>We have sent an authentication mail to you ! {'\n'} Please verify from your official email id</Text>
        </View>
        <View style={styles.onecontainer}>
            <View style={styles.twoContainer}>
                <MaterialIcons name="mark-email-read" size={60} color="white" />
            </View>
        </View>
        <View>
          <TouchableOpacity style={styles.actionButton} onPress={() => email(id)}>
          <Text style={styles.buttonText}>Continue  <Icon name="keyboard-arrow-right" size={20}  style={styles.IconStyle} /></Text>
          </TouchableOpacity>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    onecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
      },
      twoContainer: {
        alignItems: 'center', // Center the icon vertically
        backgroundColor: 'transparent', // Make the container transparent
      },
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
        color:"white"
    
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: "#424874",
        textAlign: "center",
      }, actionButton: {
        backgroundColor: "#DCD6F7",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginLeft: 10,
      }
})
