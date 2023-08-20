import {ScrollView, StyleSheet,Text,View,TextInput,SafeAreaView,Button,Image} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';


export default function CreateNews() {

        const [text, onChangeText] = React.useState('');
        const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1,           // Compress the image (0: lowest quality, 1: highest quality)
      base64: true            // Return the image in base64 format
    });

    if (!result.canceled) {
      setImage(`data:image/png;base64,${result.assets[0].base64}`);
    }
  };

 const createPost = async ()=>{
    const payload = {
        image:image,
        description:text,
        name:'samuel',
        role:"author"
    }
    try {
      let res = await axios.post('http://192.168.1.38:3000/create', payload);
      console.log(res.data);
      if(res.data.code===0){
        alert("Something went wrong");
        return
      }
        
      setImage("");
      onChangeText("");
  } catch (err) {
      console.error(err);
      alert("someting went wrong")
  }
  }      
        return (
    <ScrollView>
        <SafeAreaView styl={styles.container}>
        

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Description"
              keyboardType="text"
              multiline = {true}
              numberOfLines = {4}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Button title="Pick an image" onPress={pickImage} />
               {image && <Image source={{ uri: image }} style={{ width: 100, height: 100,marginTop:10 }} />}
             </View>


         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
          <Button disabled={!image && !text || !image && text||image && !text} title="create" style={styles.button} onPress={createPost} />
         </View>

          </SafeAreaView>
          </ScrollView>
        );
      };
      
      const styles = StyleSheet.create({
        input: {
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius:8,
          borderColor:'grey'
        },
        button:{
            margin:10
        },
        container:{
            padding:10,
            alignItems: 'center',
            alignContent:'center',
            justifyContent: 'center'
        }
      });
    