import {StyleSheet, Text, TextInput, TouchableOpacity,KeyboardAvoidingView,View} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const onLogin = ()=>{
    navigation.navigate("Dashboard")
   }

    return ( 
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.sub}>New user? <Text style={styles.sub_reg} onPress={()=>navigation.navigate('Register')}>Register</Text></Text>
        </View>
      </KeyboardAvoidingView>

      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom:15,
      fontFamily:'Poppins'

    },
    sub: {
        marginTop:8,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom:15
      },
      sub_reg: {
        color: '#1877F2',
      },
    input: {
      width: 250,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      margin:8
    },
    button: {
      width: 250,
      height: 40,
      backgroundColor: '#1877F2',
      color: '#fff',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });