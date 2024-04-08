import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useGlobalContext } from '../context/globalContext';


export default function LoginScreen() {

    useEffect(() => {
        // Load Poppins Light font
        Font.loadAsync({
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
          // Add more fonts as needed
        });
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const handleBackButtonClick = () => {
                navigation.navigate('Animate');
                return true; // Prevent default behavior (exit app)
            };

            BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);

            return () => {
                BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
            };
        }, [])
    );


    const showAlert = (Type, Message) => {
        Alert.alert(
            Type,
            Message,
            [{ text: 'OK', onPress: () => navigation.navigate('Login', {id}) }],
            { cancelable: false }
        );
        };

    const [password, setPassword] = useState('');
    const { login, error } = useGlobalContext();

    const navigation = useNavigation();
    const route = useRoute();
    const {id} = route.params;

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    
    const validateLogin = async(userId,userPassword)=>{
        try {
            
            const valid = await login(userId,userPassword);

            if(valid){
                handleLogin();
            }
            else{
                showAlert("Password incorrect", "Enter correct password.");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
    <View style={styles.container}>
        <View style={styles.insideContainer} >
            <Text style={styles.head}>Hello <Text style={styles.headId}> {id}! </Text></Text>
        </View>
        <View style={styles.insideContainer}>
            <Text style={styles.text}> Enter your password to Login. </Text>
        </View>
        <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(data) => setPassword(data)}
                />
            <TouchableOpacity style={styles.actionButton} onPress={()=> validateLogin(id,password)}>
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b4bab",
        padding: 15
        },
        insideContainer:{
        },
        head:{
            color: 'white',
            fontFamily: 'Poppins-Light',
            fontSize: 35,
            marginTop: 35,
            marginLeft: 10,
        },
        formContainer: {
            alignItems: 'center',
            marginVertical: 30,
        },
        input: {
            backgroundColor: 'white',
            width: '80%',
            marginBottom: 20,
            padding: 15,
            borderRadius: 15,
            marginLeft: 18
        },
        actionButton: {
            backgroundColor: "#DCD6F7",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 15,
            textAlign: 'center',
            marginTop: 35,
            marginLeft: 30,
            marginRight: 8,
            width: 300
            },
            buttonText: {
            fontSize: 18,
            fontFamily: 'Poppins-Bold',
            color: "#424874",
            textAlign: "center",
            },
            headId:{
            color: "#FCDC2A",
            },
            text:{
            fontSize: 18,
            padding: 15,
            borderRadius: 10,
            fontFamily: 'Poppins-Bold',
            color:"white"
            },
})