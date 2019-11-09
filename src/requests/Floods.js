

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import ToggleSwitch from 'toggle-switch-react-native'

export default class Floods extends Component {
  state = {
    isOnDefaultToggleSwitch: true,
    
  };

  request() {
    Actions.request()
  }
  render() {
    return (
      <View style={{backgroundColor:'#000'}}>
        <View style={styles.maincontainer}>
        <View style={styles.container1}>
        <View style={{marginRight:50}}>
          <TouchableOpacity onPress={this.request}
          style={{marginRight:30,marginTop:30}}>    
         
         <Icon name="md-arrow-round-back" size={30} color="#E62626" />
         </TouchableOpacity>
         </View>
          <View style={{marginLeft:90}}>
            
            <Image style={{marginLeft:20, width: 80, height: 80,borderRadius:15}} 
            source={require('../images/Ambulance.jpeg')}/>
          </View>
          <Text style={{fontSize:20,color:'#000',marginLeft:50}}>Floods rescue services</Text>

        <View style={styles.container}>
    
    <View style={{marginTop:15}}>
        <ToggleSwitch
            label='Location'
          isOn={this.state.isOnDefaultToggleSwitch}
          onToggle={isOnDefaultToggleSwitch => {
            this.setState({ isOnDefaultToggleSwitch });
          }}
          style={{paddingBottom:15,paddingTop:15,}}
        />
    <TextInput
          style={{height: 40, borderColor: 'gray',borderColor: 'red',
          borderWidth: 1,borderRadius:3, borderWidth: 1,marginTop:10,marginBottom:5}}
          placeholder='Number of people injured'
          
          />
         <TextInput
          style={{height: 40, borderColor: 'gray',borderColor: 'red',
          borderWidth: 1, borderRadius:3,borderWidth: 1,marginTop:10,marginBottom:5}}
          placeholder='short description of the condition'
          
          />  
    <View style={{flexDirection:'row',paddingTop:15}}>
      <View style={{ marginLeft:5 ,marginRight:20,paddingLeft: 10,}}>
      <Image style={{ width: 40, height: 40,borderRadius:5,borderWidth:2,borderColor:'#000'}} 
            source={require('../images/camera.jpg')}/>
      </View>
      <View style={{borderRadius:20,marginRight:5 ,marginLeft:80,paddingRight: 10,}} >
    <Button
   
    title="Send"
    color="blue"
    
    />
    </View>
    </View>
    
   </View>
   </View>
   </View>
   </View>
   </View>   
      
    );
  }
}

const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor: '#000',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft:15,
        marginRight:15,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container1: {
    padding: 20,
    
    backgroundColor:'#009999',
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    
    height:1000,
    shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
   },
   container: {
    padding: 20,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 15,
    marginTop:50,
    height:300,
    marginRight: 15,
    shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
   },
  
   input1: {
    height: 40,
    backgroundColor: '#A7A7AF',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop:15,
    paddingTop:10,
    paddingBottom: 15,
   },
   input: {
    height: 40,
    backgroundColor: 'rgba(123, 94, 155, 0.5)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop:15,
    paddingTop:10,
    paddingBottom: 15,
   },
   buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 50,
   },
   buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700',
   }
});