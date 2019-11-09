import React, { Component } from "react";
import { StyleSheet, Text, View, Image,Button,Dimensions,TouchableOpacity} from "react-native";
import { SocialIcon } from 'react-native-elements'
import Video from "react-native-video";
import LightVideo from '../video/Backv.mp4';
import { Actions } from 'react-native-router-flux';
import LoginForm from '../login/LoginForm'

export default class LandingPage extends Component {
  home() {
    Actions.home()
  }
  signup() {
    Actions.signup()
  }
 render() {
  
  return(
  <View style={styles.container}>
 
  <View style={{height:100}}>
  <Image
  style={styles.logo}
  source={require('../images/donor.png')}
/>
  </View>
  <View style={{alignItems: 'center',marginTop:30,}}>
  <Text style={{fontWeight:'500'}}>Welcome to Donor ,your life saving app</Text>
  </View>
 <View style={styles.login}>
   <LoginForm/>
   </View>
  <View style={{marginLeft:250}}><TouchableOpacity><Text style={{color:'#92A9F2'}}>Reset Password</Text></TouchableOpacity></View>
 
 <View style={{ flexDirection: 'row',marginTop:20,marginLeft:30 }}>
 <TouchableOpacity>
 <Image
 style={styles.icon}
 source={require('../images/facebook.jpeg')}
/>
</TouchableOpacity>
<TouchableOpacity>
<Image
  style={styles.icon}
  source={require('../images/google.jpeg')}
/>
</TouchableOpacity>
<View style={{marginLeft:10,marginTop:5}}>
<TouchableOpacity style={{backgroundColor: "#841584",alignItems: 'center',width:60,height:30,borderRadius:10,}} onPress={this.home} >  
<Text style={{color:'#fff' ,fontWeight:'500'}}>Login</Text>
</TouchableOpacity>
</View>
</View>


 <View>
 <View style={[{ flexDirection: 'row' }, styles.signupTextCont]}>
 <Text style={styles.signupText}>Don't have an account yet?</Text>
 <TouchableOpacity onPress={this.signup}>
  <Text style={styles.signupButton}> Signup</Text>
 </TouchableOpacity>
</View>
 </View>
 </View>


  );
    

    }
}

const styles = StyleSheet.create({
 
 container:{
  backgroundColor: '#fff',
  flex: 1,
  alignContent: 'center',
  

 },
 logo: {
   marginTop:10,

 },

 login:{
   marginLeft: 10,
   marginRight: 10,
   marginTop: 80,
 },
 orButton:{
    marginTop:10,
 },
 or: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 30,
  marginTop:40,
 },
 buttonContainer: {
   alignItems: 'center',
  backgroundColor: '#2980b9',
  borderRadius: 15,
  width:80

 },
 buttonText: {
  textAlign: 'center',
  color: '#000',
  fontWeight: '500',
 },
 icon:{
   marginLeft:15,
   width:40,
   height:40,
   borderRadius:5,
 },
 signupButton: {
  color: "#000",
  fontSize: 16,
  fontWeight: "500",
 },
 signupTextCont: {
   marginTop:50,
  flexGrow: 1,
  alignItems: "flex-end",
  justifyContent: "center",
  paddingVertical: 16,
  flexDirection: "row",
 },
})

   
   