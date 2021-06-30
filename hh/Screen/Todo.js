// import React from 'react';
// // import logo from './logo.svg';

// // import ListItems from './ListItems'
// // import { library } from '@fortawesome/fontawesome-svg-core'
// // import { faTrash } from '@fortawesome/free-solid-svg-icons'
 
// import {   TextInput, View, TouchableOpacity, Text, FlatList } from 'react-native';


// // library.add(faTrash)

// class Todo extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       items:[],
//       currentItem:{
//         text:'',
//         key:''
//       }
//     }
//     this.addItem = this.addItem.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     this.setUpdate = this.setUpdate.bind(this);
//   }
//   addItem(e){
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     if(newItem.text !==""){
//       const items = [...this.state.items, newItem];
//     this.setState({
//       items: items,
//       currentItem:{
//         text:'',
//         key:''
//       }
//     })
//     }
//   }
//   handleInput(e){
//     this.setState({
//       currentItem:{
//         text: e.target.value,
//         key: Date.now()
//       }
//     })
//   }
//   deleteItem(key){
//     const filteredItems= this.state.items.filter(item =>
//       item.key!==key);
//     this.setState({
//       items: filteredItems
//     })

//   }
//   setUpdate(text,key){
//     console.log("items:"+this.state.items);
//     const items = this.state.items;
//     items.map(item=>{      
//       if(item.key===key){
//         console.log(item.key +"    "+key)
//         item.text= text;
//       }
//     })
//     this.setState({
//       items: items
//     })
    
   
//   }
//  render(){
//   return (
//     <View style={{justifyContent:'center',alignItems:'center',alignItems:'center'}}>
//       <View>
//         <View >
//           <TextInput type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></TextInput>
        
//           <TouchableOpacity onPress={()=> {this.addItem}}>
//               <Text>
//                   submite
//               </Text>

//           </TouchableOpacity>
//         </View>
//         <Text>{this.state.items.text}</Text>
        
//           {/* <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/> */}
        
//       </View>
//     </View>
//   );
//  }
// }


// export default Todo;
