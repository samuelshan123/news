import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import React,{useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './components/auth/login';
import Register from './components/auth/register';
import BottomTabNavigator from './components/bottom-navigation/BottomTabNavigator';
export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
  //   <View style={styles.container}>
  //     <Container />
  // </View>

  <NavigationContainer>
    <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={Login}  options={{headerShown:false}}/> */}
        <Stack.Screen name='Login' options={{ headerStyle: {
            backgroundColor: '#1877F2',
          },          headerTintColor: '#fff',
        }} component={Login}/>
        <Stack.Screen name='Register'  options={{ headerStyle: {
            backgroundColor: '#1877F2',
          },          headerTintColor: '#fff',
        }} component={Register}/>
        <Stack.Screen name='Dashboard'  component={BottomTabNavigator}  options={{headerShown:false}} />
        {/* <Stack.Screen  component={Home}/> */}


    </Stack.Navigator>
  </NavigationContainer>

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
