import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TransactionsScreen() {
    // Load fonts asynchronously
    useEffect(() => {
        Font.loadAsync({
            'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
            'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        });
    }, []);

    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    // Static transaction data
    const transactions = [
        { id: 1, amount: 100, date: '2024-04-28' },
        { id: 2, amount: 150, date: '2024-04-27' },
        { id: 3, amount: 175, date: '2024-04-26' },
        { id: 4, amount: 120, date: '2024-04-25' },
        { id: 5, amount: 190, date: '2024-04-24' },
        { id: 6, amount: 260, date: '2024-04-23' },
        { id: 7, amount: 120, date: '2024-04-22' },
        { id: 8, amount: 290, date: '2024-04-21' },
        { id: 9, amount: 360, date: '2024-04-20' },
    ];

    // Find the most recent transaction
    const mostRecentTransactionIndex = transactions.reduce((prevIndex, currentTransaction, currentIndex) => {
        if (currentTransaction.date > transactions[prevIndex].date) {
            return currentIndex;
        }
        return prevIndex;
    }, 0);

    return (
        <View style={styles.container}>
            <View style={styles.headcontainer}>
                <View style={styles.left}>
                    <FontAwesome name="user-circle-o" size={30} color="black" style={styles.logo} />
                    <Text style={styles.userName}> {id} </Text>
                </View>
            </View>
            <Text style={styles.title}>Transactions</Text>
            <ScrollView>
                {transactions.map((transaction, index) => (
                    <View
                        key={transaction.id}
                        style={[
                            styles.transactionCard,
                            index === mostRecentTransactionIndex && { backgroundColor: 'rgba(144,238,144,0.5)' },
                        ]}
                    >
                        <Text style={styles.amount}>Amount: {transaction.amount}</Text>
                        <Text style={styles.date}>Date: {transaction.date}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b4bab",
        padding: 15,
    },
    headcontainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        borderRadius: 10,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginTop: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: 'white',
        marginBottom: 20,
        marginTop: 25,
        textAlign: 'center',
    },
    transactionCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
    },
    amount: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: 'white',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        color: 'white',
    },
});
