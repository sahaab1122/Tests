import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Br, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Btn from '../Component/Btn';
import Textbtn from '../Component/Textbtn'
import Updatepassword from '../Screen/Updatepassword'

const Forgetpassword = (props) => {
  return (
    <View style={styles.Container}>
      <ScrollView contentContainer style={{flexGrow:0}}>


        <Text style={styles.account} >Forget{"\n"}Password? </Text>
        <Text style={{fontSize:14,textAlign:'center',color:"#8d45ff",opacity: 0.8,padding:30}}>Please Enter your Email Address And We{"\n"} Will Sent Your Passoward By Email{"\n"} Immediately</Text>
        <View style={styles.newaccount}>
         
          <View style={styles.inputContainer}>
          <Text style={styles.name}>Email</Text>
            <Textbtn  place="Email" />
          </View>
         
        
          <TouchableOpacity onPress={()=>props.navigation.navigate('Updatepassword')} style={styles.btn}><Text style={styles.btntext}>Sent</Text></TouchableOpacity>

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
export default  Forgetpassword