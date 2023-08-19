import {ScrollView, StyleSheet,Text,View,TextInput,SafeAreaView,Button,Image} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function CreateNews() {

        const [text, onChangeText] = React.useState('');
        const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

 const createPost = ()=>{

    const payload = {
        image:image,
        description:text
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
    