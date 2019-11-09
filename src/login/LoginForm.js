import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import { Actions } from 'react-native-router-flux';



export default class LoginForm extends Component {

 render() {

  return (
   <View >
    <TextInput
     placeholder='Username or Email'
     placeholderTextColor='#000'
     returnKeyType='next'
     onSubmitEditing={() => this.passwordInput.focus()}
     autoCapitalize='none'
     autoCorrect={false}
     keyboardType='email-address'
     style={styles.input1}

    />
    <TextInput
     placeholder='Password'
     placeholderTextColor='#000'
     returnKeyType='go'
     secureTextEntry
     ef={(input) => this.passwordInput = input}
     style={styles.input}
    />
   </View>
  );
 }
}

const styles = StyleSheet.create({
 

 input1: {
  height: 40,
  backgroundColor: 'rgba(123, 94, 155, 0.5)',
  marginBottom: 20,
  color: '#000',
  borderRadius: 10,

 },
 input: {
  height: 40,
  backgroundColor: 'rgba(123, 94, 155, 0.5)',
  marginBottom: 20,
  color: '#000',
  paddingHorizontal: 10,
  borderRadius: 10,
  marginTop: 20,

 },
});
