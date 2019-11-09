import React, { Component } from 'react';
import { StyleSheet, View, Platform,Image,ScrollView,TouchableOpacity ,Animated} from 'react-native';
import { Text, Card,} from 'react-native-elements';
const HEADER_MIN_HEIGHT = 100;
const HEADER_MAX_HEIGHT = 150;

export default class App extends Component
{
    constructor()
    {
        super();

        this.scrollYAnimatedValue = new Animated.Value(0);

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
            outputRange: [ '#2E9084', '#46CDBD' ],
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
            <Image source={require('../images/thanks.png')}style={{height:60,width:60}}/>
            <View>
            <Text style={{marginLeft:15,fontWeight:'300'}} > Dear Alice,thank you for saving </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >my life today.I received your  </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >blood after an accident today.</Text>
            </View>
            </View>
             </Card>
             <Card containerStyle={styles.card}>
             <View style={{flexDirection: 'row',marginTop:5}}>
             <Image source={require('../images/sr2.png')}style={{height:60,width:60}}/>
             <View>
             <Text style={{marginLeft:15,fontWeight:'300',marginTop:5}}> Status Update.</Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >Hi  your blood just left the storage </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >facility at the mombasa regional </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} > balood bank</Text>
             </View>
             </View>
              </Card>
              <Card containerStyle={styles.card}>
             <View style={{flexDirection: 'row',marginTop:5}}>
             <Image source={require('../images/str.png')}style={{height:60,width:60}}/>
             <View>
             <Text style={{marginLeft:15,fontWeight:'300',marginTop:5}}> Status Update.</Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >Hi  your blood just left the storage </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >facility at the mombasa regional </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} > balood bank</Text>
             </View>
             </View>
              </Card>
              <Card containerStyle={styles.card}>
              <View style={{flexDirection: 'row',marginTop:5}}>
              <Image source={require('../images/sr2.png')}style={{height:60,width:60}}/>
              <View>
              <Text style={{marginLeft:15,fontWeight:'300',marginTop:5}}> Status Update.</Text>
              <Text style={{marginLeft:15,fontWeight:'300'}} >Hi  your blood just left the storage </Text>
              <Text style={{marginLeft:15,fontWeight:'300'}} >facility at the mombasa regional </Text>
              <Text style={{marginLeft:15,fontWeight:'300'}} > balood bank</Text>
              </View>
              </View>
               </Card>
               <Card containerStyle={styles.card}>
             <View style={{flexDirection: 'row',marginTop:5}}>
             <Image source={require('../images/sr1.png')}style={{height:60,width:60}}/>
             <View>
             <Text style={{marginLeft:15,fontWeight:'300',marginTop:5}}> Status Update.</Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >Hi  your blood just left the storage </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} >facility at the mombasa regional </Text>
             <Text style={{marginLeft:15,fontWeight:'300'}} > balood bank</Text>
             </View>
             </View>
              </Card>
              <Card containerStyle={styles.card}>
              <View style={{flexDirection: 'row',marginTop:5}}>
              <Image source={require('../images/dc1.png')}style={{height:60,width:60}}/>
              <View>
              <Text style={{marginLeft:15,fontWeight:'300',marginTop:5}}> Status Update.</Text>
              <Text style={{marginLeft:15,fontWeight:'300'}} >Hi  your blood just left the storage </Text>
              <Text style={{marginLeft:15,fontWeight:'300'}} >facility at the mombasa regional </Text>
              <Text style={{marginLeft:15,fontWeight:'300'}} > balood bank</Text>
              </View>
              </View>
               </Card>
                </ScrollView>

                <Animated.View style = {[ styles.animatedHeader, { height: headerHeight, backgroundColor: headerBackgroundColor } ]}>
                <View style={{flexDirection: 'row',marginTop:15}}>
                <Image source={require('../images/user.jpg')}
                style={{height:60,width:60}}
                />
                <Text style={{marginLeft:30,fontWeight:'700',marginTop:30}}>Make A Donation</Text>
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

        alignItems: 'center',
        height:100
	},
});