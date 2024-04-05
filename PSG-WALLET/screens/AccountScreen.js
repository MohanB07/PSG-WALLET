import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function AccountScreen() {

  const navigation = useNavigation();

  const [username, setUName] = useState("Aparna R");
  const [amount,setAmount] = useState(100);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

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
        <View style={styles.headcontainer}>
          <View style={styles.left}>
            <FontAwesome name="user-circle-o" size={30} color="black" style={styles.logo} />
            <Text style={styles.userName}>{username}</Text>
          </View>
          {/* <TouchableOpacity style={styles.right}>
            <FontAwesome name="history" size={30} color="black"  />
            <Text> View history</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.header,styles.col1]}>Existing Amount:</Text>
            <Text style={[styles.cell, styles.header]}>200</Text>
           
          </View>
          <View style={styles.row}>
            <Text style={[styles.cell,styles.col1,styles.header]}>Last top-up on:</Text>
            <Text style={[styles.cell,styles.header]}>{formattedDate}</Text>
            
          </View>
          <View style={styles.row}>
            <Text style={[styles.cell,styles.col1,styles.header]}>Enter Amount</Text>
            <TextInput
                keyboardType="number-pad"
                style={styles.input}
                value={amount.toString()}
                onChangeText={setAmount}
                placeholder="Enter Amount"
                
        />
           
          </View>
      </View>
      <View style={styles.submitButton}  >
        <TouchableOpacity style={styles.actionButton}  onPress={() => navigation.navigate('Scan')}  >
            <Text style={styles.buttonText}>Pay via UPI  <Icon name="keyboard-arrow-right" size={20}  style={styles.IconStyle} /></Text>
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
  //header
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
    
  table: {
    //borderWidth: 1
    paddingTop:30,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    
    
  },
  row: {
    flexDirection: 'row',
    //borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  col1: {
    flex: 2, // Set the flex ratio to 2 for the first column
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth:2,
    borderColor:"white",
    margin:5,
    borderRadius:10,
    
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    
  },
  input: {
    flex: 1,
    borderColor: 'white',
    padding: 10,
    textAlign: 'center',
    borderWidth:2,
    borderColor:"white",
    margin:5,
    borderRadius:10,
    color:"white",
  },
  actionButton: {
    alignContent:'center',
    backgroundColor: "#DCD6F7",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginLeft: 10,
  },
  submitButton:{
    alignItems:"center",
    width:"100%",
    paddingTop:40,

  }
})