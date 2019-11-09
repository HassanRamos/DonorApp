import React, {Component} from 'react';
import{StyleSheet, Text, View} from 'react-native';
import Landingpage from './src/landingpage/Landingpage'
import QRgenerator from './src/pages/QRgenerator'
import Home from './src/pages/Home'
import Routes from './src/Routes'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
     <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});
