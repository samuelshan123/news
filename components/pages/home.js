import {ScrollView, StyleSheet,Text,View} from 'react-native';
import React, { useState } from 'react';
import CardComponent from '../news-content/card';


export default function Home() {

    const DATA = [{
        id:1,
        name: 'samuel raj',
        profile_pic:'https://reactnative.dev/img/tiny_logo.png',
        role: 'author',
        description: 'Your long text that might take more than two lines goes here...Your long text that might take more than two lines goes here...',
        image:"https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png"
    },
    {
        id:2,
        name: 'samuel raj',
        profile_pic:'https://reactnative.dev/img/tiny_logo.png',
        role: 'author',
        description: 'Your long text that might take more than two lines goes here...Your long text that might take more than two lines goes here...',
        image:"https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png"
    },
    {
        id:3,
        name: 'samuel raj',
        profile_pic:'https://reactnative.dev/img/tiny_logo.png',
        role: 'author',
        description: 'Your long text that might take more than two lines goes here...Your long text that might take more than two lines goes here...',
        image:"https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png"
    }]
    return ( 
        <View style = {
            styles.head
        } >
            <ScrollView showsVerticalScrollIndicator={false}>
                <CardComponent cardData={DATA}></CardComponent>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        margin: 10,
    },
});