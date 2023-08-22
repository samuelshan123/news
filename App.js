import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React,{useEffect } from 'react';
import StackNavigator from './StackNavigator';

export default function App() {

  return (
  //   <View style={styles.container}>
  //     <Container />
  // </View>

  <StackNavigator></StackNavigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:''
  },
  header: {
    // give it a fixed height or any other styling you want
    height: 50,
  },
});
