import React, { Component } from 'react';
import { StyleSheet, View, Text ,Image,TouchableOpacity,ScrollView} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux';


const items =[
  { name: 'Ambulance', code: '#27ae60' },
  { name: 'Blood', code: '#27ae60' }, 
  { name: 'Floods Responce', code: '#34495e' }, 
  { name: 'Fire Responce', code: '#34495e' }, 
  { name: 'Robbery', code: '#2980b9' },
  { name: 'Quick Transport', code: '#2980b9' },
];

export default class Example extends Component {
  constructor(props){
    super(props)
    this.request = this.request.bind(this)
  }
  signup() {
    Actions.signup()
  }
  responce() {
    Actions.responce()
  }
  request(name){
   
    
    if( name==='Ambulance'){
      Actions.ambulance()
     
      
    }
    if( name==='Blood'){
      Actions.blood()
    }
  if( name==='Floods Responce'){
    Actions.floods()
}
if( name==='Fire Responce'){
  Actions.fire()
}
if( name==='Robbery'){
  Actions.robbery()
}
if( name==='Quick Transport'){
  Actions.transport()
}
  }

     
  render() {
    return (
    
        <View style={styles.maincontainer}>
        <View style={styles.formContent}>
        
        <View style={styles.text}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={this.signup}
          style={{marginRight:15,marginTop:15}}>    
         
         <Image
            style={{marginLeft:5,marginRight:30, width: 60, height: 60,
              borderRadius:10,borderWidth:2,borderColor:'#000'}}
            source={require('../images/user.jpg')}
          />
         </TouchableOpacity >
        <Image
            style={styles.logo}
            source={require('../images/logo5.jpeg')}
          />
          
          <TouchableOpacity onPress={this.responce}
          style={{marginRight:15,marginTop:15}}>    
         
         <Image
            style={{marginLeft:45, width: 60, height: 60,
              borderRadius:10,borderWidth:2,borderColor:'#000'}}
            source={require('../images/bell.jpeg')}
          />
         </TouchableOpacity>
          </View> 
        <Text style={styles.text1}>
            Get CERT Services
        </Text>
        <Text style={{fontSize:15,color:'#000'}}>
          Community Emergency Response Team</Text>
        </View>
        <ScrollView>
      <FlatGrid
        itemDimension={110}
        items={items}
        style={styles.gridView}
        
        renderItem={({ item, index }) => (
          <TouchableOpacity  onPress= {()=>this.request(item.name)} >
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
            <Text style={styles.itemName}>{item.name}</Text>
            
          </View>
          </TouchableOpacity>
        )}
      />
      </ScrollView>
      </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor: '#000',
    },
  gridView: {
    marginTop: 17,
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    height: 110,
  },
  formContent:{
    borderRadius: 30,
    backgroundColor:'#DCD8DF',
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
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius:15,
    borderColor: '#000',
    borderWidth: 3,
   },
    text:{
        alignContent: 'center',
        alignItems: 'center',
        marginTop:20,
   },
   text1:{
        fontSize:30,
        fontWeight:'600',
        color:'#000',
   },
   textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});