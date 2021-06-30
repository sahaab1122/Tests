import React, { Profiler } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from "./hh/Screen/Signup"
import { NavigationContainer } from '@react-navigation/native';
// import Login from "./hh/Screen/Login"
import Btn from "./hh/Component/Btn"
import Forgetpassword from "./hh/Screen/Forgetpassword"
import Updatepassword from "./hh/Screen/Updatepassword"
import Home from "./hh/Screen/Home"
import Todo from './hh/Screen/Todo'
// import ListItems from './hh/Screen/ListItems'
import Textbtn from "./hh/Component/Textbtn"
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>

    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="Login" component={Login}/> */}
      <Stack.Screen name="Todo" component={Todo} />
      {/* <Stack.Screen name="ListItems" component={ListItems} /> */}
       
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Btn" component={Btn}/>
      <Stack.Screen name="Textbtn" component={Textbtn} />
      <Stack.Screen name="Forgetpassword" component={Forgetpassword}/>
      <Stack.Screen name="Updatepassword" component={Updatepassword}/>
      
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack