import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const opacityVal = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(opacityVal, {
      toValue: 0,
      duration: 5000
    }).start();
  }
  const fadeIn = () => {
    Animated.timing(opacityVal, {
      toValue: 1,
      duration: 5000
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={
        [
          styles.fadeContainer,
          {
            opacity: opacityVal
          }
        ]
      }>
        <Text style={styles.fadeText}>Fade me ...</Text>
      </Animated.View>

      <Button title="Fade Out" onPress={fadeOut} />
      <Button title="Fade In" onPress={fadeIn} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadeContainer: {
    padding: 20,
    backgroundColor: 'blue'
  },
  fadeText: {
    fontSize: 30,
    color: 'white',
    margin: 10
  }
});
