import React, {Component} from 'react';
import{StyleSheet, Text, View,TextInput,Image,TouchableOpacity,} from 'react-native';
import { Divider } from 'react-native-elements';


export default class QRgenerator extends Component {
    constructor(){

        super();
    
        this.state={
    
          imageURL : require('../images/scan.png')
    
        }
    
      }
    
      Load_New_Image=()=>{
    
        this.setState({
    
          imageURL :require('../images/qr.jpg')
    
        })
      }



  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection: 'row',marginTop:15}}>
        <Image source={require('../images/user.jpg')}
        style={{height:60,width:60}}
        />
        <Text style={{marginLeft:30,fontWeight:'600',marginTop:30}}>Make A Donation</Text>
      </View>
      <Divider/>
      <View style={styles.text}>
      <Text>Dear user we are happy to seeyou save live by donating.</Text> 
      <Text>You are our hero ,donating blood to save lives.</Text>
      <Text>Please ensure your donation count by publishing to the national blood bank records</Text>
      </View>
       <View>
       
       <TextInput
       placeholder='Please enter your valid key'
       placeholderTextColor='#000'
       returnKeyType='next'
       onSubmitEditing={() => this.passwordInput.focus()}
       autoCapitalize='none'
       autoCorrect={false}
       style={styles.input}
  
      />
     
       </View>
        <View style={styles.scan} >
        <Image
        source = {this.state.imageURL}
        style={{height:200,width:200}}
        />
        </View>
       
        <TouchableOpacity onPress={this.Load_New_Image} style={styles.print}><Text style={{fontWeight:'700'}}>Print code</Text></TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scan:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
  },
  print:{
    marginTop:20,
    marginBottom: 10,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:50,
    marginRight:50,
    height:40,
    fontSize:20,
    backgroundColor:'rgba(123, 94, 155, 0.5)',
    borderRadius:5,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(123, 94, 155, 0.5)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop:30,
    marginLeft:50,
    marginRight:50,
   },
  text:{
      alignItems: 'center',
      marginTop:20,
      fontWeight:'300',

  }

});
