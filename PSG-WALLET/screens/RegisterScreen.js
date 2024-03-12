import React from 'react'
import { StyleSheet, Text, View } from 'react-native'




export default function RegisterScreen() {
    var roll = "23MX103"
    return (
    <View style={styles.container}>
    <Text style={styles.head}>Hello {roll}!</Text>
    <Text style={styles.text}>Looks like you are new here !  {'\n'} Let's get you set up</Text>
    
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
    head: {
        flex: 1,
        justifyContent: 'flex-start', 
        textAlign: 'left',
        paddingTop: 50,
        color:'white',
        fontWeight:'bold',
        fontSize:35,
        //borderWidth: 2,
        paddingLeft: 15

    },
    text:{
        
        backgroundColor:'white',
        flex:10,
        justifyContent: 'flex-start', 
        //borderWidth: 2,
        fontWeight:'bold',
        padding: 15,
        borderRadius: 10
    
    }
})
