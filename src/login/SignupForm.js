import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';




export default class LoginForm extends Component {
    request() {
        Actions.request()
      }


 render() {
  return (
   <View style={styles.container}>
    <StatusBar
     barStyle='light-content'
    />
    <TextInput
     placeholder='Username'
     placeholderTextColor='#000'
     returnKeyType='next'
     onSubmitEditing={() => this.emailInput.focus()}
     autoCapitalize='none'
     autoCorrect={false}
     style={styles.input}

    />
    <TextInput
     placeholder='email'
     placeholderTextColor='#000'
     returnKeyType='next'
     onSubmitEditing={() => this.phoneInput.focus()}
     autoCapitalize='none'
     autoCorrect={false}
     keyboardType='email-address'
     style={styles.input}

    />
    <TextInput
     placeholder='Phone'
     placeholderTextColor='#000'
     returnKeyType='next'
     onSubmitEditing={() => this.passwordInput.focus()}
     autoCapitalize='none'
     keyboardType='numeric'

     autoCorrect={false}
     style={styles.input}

    />

    <TextInput
     placeholder='Blood Type'
     placeholderTextColor='#000'
     returnKeyType='go'
     secureTextEntry
     ef={(input) => this.passwordInput = input}
     style={styles.input}
    />

    <TouchableOpacity style={styles.buttonContainer} onPress={this.request}>
     <Text style={styles.buttonText}>Join Cert</Text>
    </TouchableOpacity>
   </View>
  );
 }
}

const styles = StyleSheet.create({
 container: {
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 10,
  shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
 },

 input: {
  height: 40,
  backgroundColor: 'rgba(123, 94, 155, 0.5)',
  marginBottom: 10,
  color: '#000',
  paddingHorizontal: 10,
  borderRadius: 10,

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
