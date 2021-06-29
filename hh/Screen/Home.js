
import React from 'react';

import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, ActivityIndicator } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import bottomHeader from '../Component/bottomHeader';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
           
        }
    }



    

    
    


    render() {
        return (

            <View style={{ height: '100%',marginVertical:20 }}>
                {/* <bottomHeader /> */}




                    <View style={{backgroundColor:"blue" ,width:"100%",height:60,alignItems:'center',paddingHorizontal:20,justifyContent:'space-between',flexDirection:'row'}}>
                    <View>

                    <FontAwesome name="sliders" size={24} color="white" />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Entypo name="soundcloud" size={24} color="white" />
                    <Feather name="search" size={24} style={{marginHorizontal:5}} color="white" />
                    <Entypo name="dots-three-vertical" size={20} color="white" />
                    </View>
                    </View>

        

                   
                   
               
                       
            
            </View>

        )


    }
}
const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 43,
        backgroundColor: '#000DAE',
        borderRadius: 3,
        width: "90%"
    },
    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        fontFamily: 'Poppins',
        marginTop: 20,
        color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10






    },

});




export default (Home)






















// const mapState = state => {
//     return {
//         logged: state.authReducer.logged,
//         loading: state.globalReducer.loading,
//     }
// }
// const mapDispatch = dispatch => {
//     return {
//         _login: (email, pass) => dispatch(_login(email, pass)),
//         setLoading: (bol) => dispatch(set_loading(bol)),
//     }
// }


// export default connnect(mapState, mapDispatch)(Login)
