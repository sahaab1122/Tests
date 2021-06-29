import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Br, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Btn from '../Component/Btn';
import Textbtn from '../Component/Textbtn'

const Updatepassword = (props) => {
  return (
    <View style={styles.Container}>
      <ScrollView contentContainer style={{flexGrow:0}}>


        <Text style={styles.account} >Update Password </Text>
        <Text style={{fontSize:14,textAlign:'center',color:"#8d45ff",opacity: 0.8,padding:30}}>Please Enter your New Password{"\n"} And Confirm It</Text>
        <View style={styles.newaccount}>
         
          <View style={styles.inputContainer}>
          <Text style={styles.name} secureTextEntry={true}>Password</Text>
            <Textbtn  place="Enter password" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.name} secureTextEntry={true}>Confirm</Text>
            <Textbtn place="Enter Password"/>
          </View>
         
        
          <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Sent</Text></TouchableOpacity>

        </View>
        
        
        


      </ScrollView>
      
    </View>


  )
};

const styles = StyleSheet.create({
  Container: {
    
    backgroundColor: '#f3f5f9',
     justifyContent:'space-around',
    


  },

  account: {
    fontSize: 33,    
   
    color: '#8d45ff',
    textAlign:'center',
    padding:20,

    
    
    
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
export default  Updatepassword