import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default (props) => {
    return (
        
        
        
        <TextInput  placeholder={props.place} style={styles.inputfield}   >{props.text}</TextInput>

    )
}

const styles = StyleSheet.create({
   
    inputfield: {
        width: 307,
        height: 43,
        borderRadius: 3,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        padding:10
        
    
    
      },

        



    
});