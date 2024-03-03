import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RegisterScreen() {
    return (
    <View style={styles.container}>
    <Text style={styles.text}>RegisterScreen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#424874",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: 'white',
        fontSize: 35
    }
})
