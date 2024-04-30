import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [username, setUsername] = useState(id);

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

  // Custom card component
  const Card = ({ imageSource, buttonText, onPress }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <View style={styles.left}>
          <FontAwesome name="user-circle-o" size={30} color="black" style={styles.logo} />
          <Text style={styles.userName}>{username}</Text>
        </View>
        <TouchableOpacity style={styles.right}  onPress={() => navigation.navigate("Transactions", {id})}>
          <FontAwesome style={styles.history} name="history" size={30} color="black" />
          <Text> View history</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formcontainer}>
        <Card
          imageSource={require('../assets/images/pay.png')} // Change path to your image
          buttonText="Canteen Account"
          onPress={() => navigation.navigate('Account', { id })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Entire container
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
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Content
  formcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#2b4bab',
    fontWeight: 'bold',
    fontSize: 25,
  },
  history: {
    marginTop: 15,
  },
});
