import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from './components/header/header';
import Container from './components/home/container';
import * as Font from 'expo-font';
import React,{useEffect } from 'react';

export default function App() {
  // useEffect(() => {
  //   async function loadFonts() {
  //     await Font.loadAsync({
  //       'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
  //     });
  //   }
    
  // loadFonts();
  // }, []);
  return (
    <View style={styles.container}>

    {/* Fixed Header */}
    {/* <View style={styles.header}>
        <Header />
      </View> */}
    {/* Scrollable Container */}
      <Container />

  </View>

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
