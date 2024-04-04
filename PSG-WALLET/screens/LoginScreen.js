import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LoginScreen() {
    return (
    <View style={styles.container}>
        <View style={styles.insideContainer} >
            <Text style={styles.head}>Hello {id}!</Text>
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
    
})