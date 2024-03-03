import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScanScreen() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setScannedData(null);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
    <Image source={require('../assets/PSG_logo.png')} style={styles.logo} />
    <Text style={styles.header}>PSG-WALLET</Text>
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
          <Text style={styles.scannedDataText}>ID: {scannedData}</Text>
          <TouchableOpacity style={styles.actionButton} onPress={() => { navigation.navigate("register")}}>
            <Text style={styles.buttonText}>Action</Text>
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
    backgroundColor: "#424874",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E9E8E8",
  },
  scanIdText: {
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
    fontWeight: "600",
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
    fontWeight: "bold",
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
});
