import React, { useEffect, useState } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChar = text[displayText.length];
      if (nextChar) {
        setDisplayText((prevText) => prevText + nextChar);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [displayText, text]);

  return <Text style={styles.text}>{displayText}</Text>;
};

const SplashScreen = ({ navigation }) => {
  const zoomValue = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(zoomValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(zoomValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
      navigation.replace('Scan');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, zoomValue]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: zoomValue }] }}>
        <Image source={require('../assets/images/icon-wallet.png')} style={styles.logo} />
      </Animated.View>
      <TypingText text="PSG WALLET" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b4bab',
  },
  logo: {
    height: 150,
    width: 110,
    marginBottom: 20, // Added margin to separate image and text
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default SplashScreen;
