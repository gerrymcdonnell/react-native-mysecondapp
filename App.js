import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,TextInput } from 'react-native';

//import webview compionent
//import {WebView} from 'react-native';

//new version
import { WebView } from 'react-native-webview';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state={
    placeName:''
  }

  
  placeBameChangedHandler=val=>{
    this.setState({
      placeName:val
    })
  }

  render() {
    return (
        <WebView
        source={{uri: 'http://wwww.irishbloke.net'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
