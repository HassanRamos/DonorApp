import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
const items =[
  { name: 'A+', code: '#fff' },
  { name: 'B+', code: '#fff' }, 
  { name: 'AB+', code: '#fff' }, 
  { name: 'O', code: '#fff' }, 
  { name: 'A-', code: '#fff' },
  { name: 'B-', code: '#fff' },
  { name: 'AB-', code: '#fff' },
  { name: 'O-', code: '#fff' },
];
export default class Blood extends Component {
  request() {
    Actions.request()
  }
  
  render() {
    return (
        
        <View style={styles.maincontainer}>
        <View style={styles.formContent}> 
        
          <View style={{flexDirection:'row'}}>
        <View style={{marginTop:10,marginLeft:50 ,}}>
        <Image
        style={{height:100,width:100,borderRadius:50,borderColor: '#000',
        borderWidth: 1,overflow: 'hidden',}}
            source={require('../images/user.jpg')}
          />
            
        <Text style={{marginTop:10,color:'#000',fontSize:16,backgroundColor:'lightgray'}}>
           User Name
        </Text>
        </View>
        <View style={{marginRight:10,marginTop:40,marginLeft:100,}}>
          <TouchableOpacity onPress={this.request} >    
         
           <Icon name="md-arrow-round-back" size={28} color="#E62626" />
           </TouchableOpacity>
         
           
            </View>
        </View>
        <View style={{marginLeft:20,marginRight:20}}>
        <View>
        
        <TextInput
          style={{height: 40, borderColor: 'gray',borderColor: 'red',
          borderWidth: 1, borderWidth: 1,marginTop:50,marginBottom:5}}
          placeholder='Time line'
          
          />
          </View>
          <View>
          <TextInput
          style={{height: 40, borderColor: 'gray',borderColor: 'red',
          borderWidth: 1, borderWidth: 1,marginTop:5,marginBottom:5}}
          placeholder='Location'
          />
          </View>
          <View>
          <TextInput
          style={{height: 40, borderColor: 'gray',borderColor: 'red',
          borderWidth: 1, borderWidth: 1,marginTop:5,marginBottom:5}}
          placeholder='Amount'
          />
          </View>

        </View>
       <View style={{marginLeft:50,marginRight:30,height:200}}>
          <Text style={{color:'#000',marginLeft:50,fontSize:20,fontWeight:'300'}}>Blood Type:</Text>
         
          <FlatGrid
              itemDimension={100}
              items={items}
              style={styles.gridView}
             
              renderItem={({ item, index }) => (
                <TouchableOpacity  >
                <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  
                </View>
                </TouchableOpacity>
              )}
      />
        
         
        </View>
        

      <View style={{marginRight:87 ,marginLeft:60,
        marginTop:3}} >
    <Button
   style={{borderRadius:40,}}
    title="Send"
    color="red"
    
    />
    </View>
    </View>
   </View>
      

    );
  }
}
 
const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor: '#000',
    },
  formContent:{
    borderRadius: 30,
    backgroundColor:'#DCD8DF',
    borderColor: '#009999',
    borderWidth: 2,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    marginTop:20,
    height:'95%',
    shadowColor: '#000',
      shadowOffset: { width: 0, height:2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
  },
  gridView: {
    marginTop: 5,
    flex: 1,
    
  },
  itemContainer: {
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    padding: 5,
    height: 30,
    width:60,
  },
  itemName: {
    fontSize: 12,
    color: 'red',
    fontWeight: '100',
  },
  
});