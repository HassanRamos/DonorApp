import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, } from 'react-native';
import SignupForm from '../login/SignupForm'
export default class Login extends Component {

    

 render() {
  return (
   <KeyboardAvoidingView behavior='padding' style={styles.container}>
    
    <View style={styles.logoContainer}>

        <Image
            style={styles.logo}
            source={require('../images/donor.png')}
          />
            
        
        <Text style={{fontSize:15,color:'#000'}}>Welcome</Text>
</View>
    <View style={styles.formContent}>
     <SignupForm/>
    </View>
   </KeyboardAvoidingView>
  );
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#E4F0EE',  
 },
formContent:{
  borderRadius: 30,
  marginLeft: 15,
  marginRight: 15,
  marginBottom: 80,
  shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
},

logo: {
  width: 150,
  height: 80,
  borderRadius:15,
  borderColor: '#000',
  borderWidth: 3,
  alignItems: 'center',
 },
 
 logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  marginTop: 20,
  color: '#fff',

 },
 welcomeText1: {
  fontSize: 30,
  color: '#000',
  fontFamily: '',
 },
});
