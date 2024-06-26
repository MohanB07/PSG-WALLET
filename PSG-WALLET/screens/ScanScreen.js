import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGlobalContext } from '../context/globalContext';

export default function ScanScreen() {
  const { validateStudent, error } = useGlobalContext();
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    const loadFontsAndPermissions = async () => {
      await Font.loadAsync({
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      });

      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    loadFontsAndPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setScannedData(null);
  };

  const showAlert = () => {
    Alert.alert(
      'Wrong ID',
      'Please scan the valid ID.',
      [{ text: 'OK', onPress: () => navigation.navigate('Scan') }],
      { cancelable: false }
    );
  };

  const studentOrStaff = async (scannedData) => {
    const id = scannedData;
    const studentPattern = /^2/i;
    const staffPattern = /^c/i;

    const condition = id.length > 7 && !studentPattern.test(id) && !staffPattern.test(id);

    if(condition) {
      showAlert();
    }

    if (studentPattern.test(id)) {
      try {
        const valid = await validateStudent(id);
        console.log("Validation success:", valid);
        if (valid) {
          navigation.navigate('Login', {id});
        } else {
          navigation.navigate('Register', {id});
        }
      } catch (error) {
        console.error("Error in StudentAccess:", error);
      }
    } else if (staffPattern.test(id)) {
      
    } else {
      console.log("ID format not recognized");
      showAlert();
      setScannedData(null);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/PSG_logo.png')} style={styles.logo} />
    <Text style={styles.header}>MX-WALLET</Text>
    <Text style={styles.scanIdText}>Scan ID</Text>
    <View style={styles.cameraContainer}>
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
        {scanned && (
          <TouchableOpacity
            style={[styles.button, styles.scanAgainButton]}
            onPress={handleScanAgain}>
            <Text style={styles.buttonText}>Tap to Scan Again</Text>
          </TouchableOpacity>
        )}
      </View>
      {scannedData && (
        <View style={styles.scannedDataContainer}>
          <Text style={styles.scannedDataText}>ID: <Text style={styles.headId}> {scannedData} </Text> </Text>
          <TouchableOpacity style={styles.actionButton} onPress={() => studentOrStaff(scannedData)}>
          <Text style={styles.buttonText}>Continue  <Icon name="keyboard-arrow-right" size={20}  style={styles.IconStyle} /></Text>
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  
  logo:{
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: "#2b4bab",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontFamily: 'Poppins-Light',
    marginBottom: 20,
    color: "#E9E8E8",
  },
  scanIdText: {
    fontFamily: 'Poppins-Light',
    fontSize: 25,
    color: "#E9E8E8",
    marginBottom: 10,
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 20,
  },
  cameraBorder: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  scannedDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scannedDataText: {
    fontSize: 22,
    fontFamily: 'Poppins-Light',
    textAlign: "center",
    color: "#E9E8E8",
    marginBottom: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#DCD6F7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: "#424874",
    textAlign: "center",
  },
  scanAgainButton: {
    marginBottom: 0,
  },
  actionButton: {
    backgroundColor: "#DCD6F7",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginLeft: 10,
  },
  headId:{
    color: "#FCDC2A",
}
});
