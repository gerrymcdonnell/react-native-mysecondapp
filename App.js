import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

//import webview compionent
//import {WebView} from 'react-native';

//new version of webview component
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
      <View style={{ flex: 1 }}>
      <Header />
        <WebView
        source={{ uri: 'http://irishbloke.net' }}
        
        />
        <Footer />
      </View>
    );
  }
}

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>App Header</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Text style={styles.icon}>⬅️</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.icon}>⭐️</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.icon}> ➡️</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#0c084c"
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  icon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0c084c"
  }
});