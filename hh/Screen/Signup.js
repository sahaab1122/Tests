import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Btn from '../Component/Btn';
import Textbtn from '../Component/Textbtn'


const Signup = (props) => {
  return (
    <View style={styles.Container}>
      <ScrollView contentContainer style={{flexGrow:0}}>


        <Text style={styles.account}>New Account</Text>
        <View style={styles.newaccount}>
          <View style={styles.inputContainer}>
            <Text style={styles.name}>Name</Text>
            <Textbtn place="Name" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.name}>Email</Text>
            <Textbtn  place="Email" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.name} secureTextEntry={true}>Password</Text>
            <Textbtn place="Password"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.name} secureTextEntry={true}>Confirm</Text>
            <Textbtn place="Enter Password"/>
          </View>
          
          <Btn  text="Create Account" color='#f4511e' />
        </View>
        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignSelf: 'center', marginTop: 10 }}>
          <View style={{ borderBottomWidth: 1, height: 10, width: '20%' }} />
          <Text style={{ alignSelf: 'center' }}>Or With</Text>
          <View style={{ borderBottomWidth: 1, height: 10, width: '20%' }} />
        </View>
        <View style={{paddingHorizontal:20,}}>
        <Btn  text="Continue With Facebook" color='#3f65a6' />
          <Btn  text="Continue With Google" color='#f4511e' />
        </View>
        


      
      <View style={{ flexDirection: 'row', justifyContent: 'center' ,alignItems:'flex-end',flex:1,paddingTop:10 }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}><Text style={{ fontSize: 13,  color: '#8d45ff', opacity: 0.58 }}>Already have an account?</Text></TouchableOpacity>
          
          <Text style={{ fontSize: 18,  textAlign: 'left', color: '#8d45ff' }} >Signup</Text>
        </View></ScrollView>
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
export default Signup 