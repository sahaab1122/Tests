import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Btn from '../Component/Btn';
import Textbtn from '../Component/Textbtn'


const Todo1 = (props) => {
    return (
        <View style={styles.Container}>
            <ScrollView contentContainer style={{ flexGrow: 0 }}>


                <Text style={styles.account}>Todo</Text>
                <View style={styles.newaccount}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.name}>add </Text>
                        <Textbtn place="Name" />
                        <TouchableOpacity style={style.Btn}>
                            <Text>
                                submite
                                </Text>
                        </TouchableOpacity>

                    </View>
                </View>
          </ScrollView>
    </View>


            )
};

            const styles = StyleSheet.create({
                Container: {
                flex: 1,
            backgroundColor: '#f3f5f9',
            justifyContent:'space-around',
            marginTop:20


  },

            account: {
                fontSize: 26,
            textAlign: 'center',
            color: '#000'
  },
            newaccount: {
                alignSelf: 'center'
  },
            name: {
                fontSize: 13,
            color: '#8d45ff',
            alignContent: 'flex-start'

  },

            inputfield: {
                width: 307,
            height: 43,
            borderRadius: 3,
            backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1,
            padding:10
    


  },
            inputContainer:{
                marginVertical:10,
  
  },
            btn: {
                width: 307,
            height: 43,
            borderRadius: 3,
            backgroundColor: '#8d45ff',
            justifyContent:'center'

  },
            btntext: {
                alignSelf: 'center',



            fontSize: 13,

            color: '#fff'

  }








});
            export default Todo1