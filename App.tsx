import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldInput from './HelloWorldInput';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.upperx}>
        <Text>Tämä on minun ensimmäinen React Native -sovellus!</Text>
      </View>
      <View style={styles.centerx}>
        <Text>Tätä kehitetään vieläkin hieman...</Text>
      </View>
      <View style={styles.lowerx}>
        <HelloWorldInput />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'burlywood',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  upperx: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  centerx: {
    flex: 2,
    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerx: {
    flex: 3,
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
