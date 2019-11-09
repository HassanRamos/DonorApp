import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Landingpage from './landingpage/Landingpage'
import Home from './pages/Home'
import QRgenerator from './pages/QRgenerator'
import Signup from './login/Signup'
import Trackingupdates from './pages/Trackingupdates'
import MyAccount from './pages/MyAccount'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key='landingpage' component={Landingpage} title='Landingpage' initial={true} />
          <Scene key="signup" component={Signup} title='Signup'  />
          <Scene key="home" component={Home} title='Home'  />
          <Scene key="qrgenerator" component={QRgenerator} title="QRgenerator" />
          <Scene key="trackingupdates" component={Trackingupdates} title="Trackingupdates" />
          <Scene key="myaccount" component={MyAccount} title="MyAccount" />

        </Stack>
      </Router>
    )
  }
}