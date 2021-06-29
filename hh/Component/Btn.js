import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default (props) => {
    return (

        <TouchableOpacity style={[styles.text, { backgroundColor: props.colr ? props.colr : props.color }]}>
            <Text style={{ color: 'white', alignItems: 'center' }}>{props.icon}{props.text}{props.backgoundColorr}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    text: {

        
        alignItems: 'center',
        justifyContent:'center',
        
        
        height: 43,
        marginTop: 30,
        borderRadius: 5,

        



    },
});