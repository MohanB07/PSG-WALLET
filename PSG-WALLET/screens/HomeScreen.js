import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {

  const navigation = useNavigation();

  const [username, setUName] = useState("Aparna R");

   
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
        <View style={styles.headcontainer}>
          <View style={styles.left}>
            <FontAwesome name="user-circle-o" size={30} color="black" style={styles.logo} />
            <Text style={styles.userName}>{username}</Text>
          </View>
          <TouchableOpacity style={styles.right}>
            <FontAwesome name="history" size={30} color="black"  />
            <Text> View history</Text>
          </TouchableOpacity>
    </View>

    <View style={styles.formcontainer}>
        <Text style={styles.head}>Choose Account:</Text>
        <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Account')}>
                <Text style={styles.buttonText}>Canteent Account</Text>
        </TouchableOpacity>
       
        <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Account')}>
                <Text style={styles.buttonText}>Book Depot Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Account')}>
                <Text style={styles.buttonText}>Library Account</Text>
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
    padding: 15,

   
  },
  headcontainer: {
    marginTop:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    borderRadius:10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#007bff',
  },
  //content
  head: {
        
    justifyContent: 'flex-start', 
    textAlign: 'left',
    paddingTop: 50,
    color:'white',
    fontFamily: 'Poppins-Light',
    fontSize:25,
    //borderWidth: 2,
    paddingLeft: 15,
    

},

  formcontainer: {
    flex: 1,
    padding: 20,
    
  },
  button: {
    margin:20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width:250,
    height:80,
  },
  buttonText: {
    textAlign:'center',
    color: '#2b4bab',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
})