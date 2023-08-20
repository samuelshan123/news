import {ScrollView, StyleSheet,Text,View} from 'react-native';
import React, { useState,useEffect } from 'react';
import CardComponent from '../news-content/card';
import axios from 'axios';


export default function Home() {

    // const DATA = [{
    //     id:1,
    //     name: 'samuel raj',
    //     profile_pic:'https://reactnative.dev/img/tiny_logo.png',
    //     role: 'author',
    //     description: 'Your long text that might take more than two lines goes here...Your long text that might take more than two lines goes here...',
    //     image:"https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png"
    // },
    // {
    //     id:2,
    //     name: 'samuel raj',
    //     profile_pic:'https://reactnative.dev/img/tiny_logo.png',
    //     role: 'author',
    //     description: 'Your long text that might take more than two lines goes here...Your long text that might take more than two lines goes here...',
    //     image:"https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png"
    // },
    // {
    //     id:3,
    //     name: 'samuel raj',
    //     profile_pic:'https://reactnative.dev/img/tiny_logo.png',
    //     role: 'author',
    //     description: 'Your long text that might take more than two lines goes here...Your long text that might take more than two lines goes here...',
    //     image:"https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png"
    // }]
    const [DATA, setDATA] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('http://192.168.1.38:3000/getnews');
                if(res.data.code === 1) {
                    setDATA(res.data.news);
                }
                else {
                    alert("something went wrong");
                }
            } catch (err) {
                console.error(err);
                alert("something went wrong");
            }
        };
    
        fetchData();
    }, []);


    return ( 
        <View style = {
            styles.head
        } >
            <ScrollView showsVerticalScrollIndicator={false}>
                {DATA.length ?<CardComponent cardData={DATA}></CardComponent>:null}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        margin: 10,
    },
});