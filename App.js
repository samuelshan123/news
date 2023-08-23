import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React,{useEffect } from 'react';
import StackNavigator from './StackNavigator';
import {useFonts} from 'expo-font'

export default function App() {

  // const [loaded] = useFonts({
  //   'Poppins':require('./assets/fonts/Poppins-Regular.ttf')
  // })
  
  // if(!loaded){
  //   console.log("hiohvfsb");
  //   return null;
  // }
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
