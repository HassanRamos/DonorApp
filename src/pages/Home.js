import React, { Component } from 'react';
import { StyleSheet, View, Platform,Image,ScrollView,TouchableOpacity ,Animated} from 'react-native';
import { Text, Card,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const HEADER_MIN_HEIGHT = 100;
const HEADER_MAX_HEIGHT = 150;

export default class App extends Component
{
    constructor()
    {
        super();

        this.scrollYAnimatedValue = new Animated.Value(0);

    }
    trackingupdates() {
        Actions.trackingupdates()
      }
      qrgenerator(){
          Actions.qrgenerator()
      }
      myaccount(){
        Actions.myaccount()
    }
    render()
    {
        const headerHeight = this.scrollYAnimatedValue.interpolate(
        {
            inputRange: [ 0, ( HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT ) ],
            outputRange: [ HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT ],
            extrapolate: 'clamp'
        });

        const headerBackgroundColor = this.scrollYAnimatedValue.interpolate(
        {
            inputRange: [ 0, ( HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT )  ],
            outputRange: [ '#212121', '#01579B' ],
            extrapolate: 'clamp'
        });

        return(
            <View style = { styles.container }>
                <ScrollView 
                    contentContainerStyle = {{ paddingTop: HEADER_MAX_HEIGHT }}
                    scrollEventThrottle = { 16 }
                    onScroll = { Animated.event(
                      [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue }}}]
                )}>
            <Card containerStyle={styles.card}>
            <View style={{flexDirection: 'row',marginTop:5}}>
            <Image source={require('../images/user.jpg')}style={{height:60,width:60}}/>
            <TouchableOpacity onPress={this.myaccount} ><Text style={{marginLeft:30,fontWeight:'600',marginTop:30}}> My Account</Text></TouchableOpacity>
            </View>
             </Card>
             <Card containerStyle={styles.card}>
             <View style={{flexDirection: 'row',marginTop:5}}>
             <Image source={require('../images/notification.jpeg')}style={{height:60,width:60}}/>
             <TouchableOpacity  onPress={this.trackingupdates}><Text style={{marginLeft:30,fontWeight:'600',marginTop:30}}> My Tracking Updates</Text></TouchableOpacity>
             </View>
              </Card>
              <Card containerStyle={styles.card}>
              <View style={{flexDirection: 'row',marginTop:5}}>
              <Image source={require('../images/donate.jpeg')}style={{height:60,width:60}}/>
              <TouchableOpacity onPress={this.qrgenerator}><Text style={{marginLeft:30,fontWeight:'600',marginTop:30}}> Make A donation</Text></TouchableOpacity>
              </View>
               </Card>
               <Card containerStyle={styles.card}>
               <View style={{flexDirection: 'row',marginTop:5}}>
               <Image source={require('../images/compaign.jpeg')}style={{height:60,width:60}}/>
               <TouchableOpacity><Text style={{marginLeft:30,fontWeight:'600',marginTop:30}}> Campaigns</Text></TouchableOpacity>
               </View>
                </Card>
                <Card containerStyle={styles.card}>
               <View style={{flexDirection: 'row',marginTop:5}}>
               <Image source={require('../images/bloodbank.jpeg')}style={{height:60,width:60}}/>
               <TouchableOpacity><Text style={{marginLeft:30,fontWeight:'600',marginTop:30}}> Blood Bank Record</Text></TouchableOpacity>
               </View>
                </Card>
                </ScrollView>

                <Animated.View style = {[ styles.animatedHeader, { height: headerHeight, backgroundColor: headerBackgroundColor } ]}>
            <View style={{height:150}}>
            <Image
            style={styles.logo}
            source={require('../images/donor.png')}
          />
            </View>
           
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        //paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    animatedHeader:
    {
        position: 'absolute',
        //top: (Platform.OS == 'ios') ? 20 : 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item:
    {
        backgroundColor: '#E0E0E0',
        margin: 8,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card:{
		backgroundColor:'#e1dada',
		borderWidth:0,
        borderRadius:20,
        height:100
	},
});