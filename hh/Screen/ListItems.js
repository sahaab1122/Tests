// import React from 'react';
// import './ListItems.css';
// import { Ionicons } from '@expo/vector-icons';
// import { TextInput } from 'react-native-gesture-handler';


// function ListItems(props){
//     const items = props.items;
//     const listItems = items.map(item =>
//    {
//        return <View className="list" key={item.key}>
//      <View>
//          <TextInput type="text" id={item.key} value={item.text} onChange={(e)=>{
//              props.setUpdate(e.target.value,item.key)}}/>
//         <View>
       
        
//         <Ionicons onPress={()=> {props.deleteItem(item.key)} } name="trash-bin-sharp" size={24} color="black" />
//         </View>
//      </View>
     
//     </View>})
//     return 
//   }

//   export default ListItems;