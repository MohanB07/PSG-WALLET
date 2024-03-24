import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the login page after the animation completes
      navigation.replace('login');
    }, 2000); // Adjust the duration of the animation as needed

    return () => clearTimeout(timer);
  }, [navigation]);

  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      )
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        {/* <Text style={styles.logo}>Your Logo</Text> */}
        <Image
        source={require('../assets/PSG_logo.png')} // Adjust the path to your image file
        style={styles.logo}
      />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2b4bab",
  },
  logo: {
    height:150,
    width:110,
  },
});

export default SplashScreen;



