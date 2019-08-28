export const homeURL = {
  src1:'http://www.google.com',
  src2:'http://irishbloke.net'
  };

import React, { Component } from 'react';
import { Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView
 } from 'react-native';

//import webview component
import {WebView} from 'react-native';

//new version of webview component
//import { WebView } from 'react-native-webview';


export default class App extends Component {

  state = {
    WEBVIEW_REF: "weViewRef"
  };
  goBack = () => {
    this.refs[this.state.WEBVIEW_REF].goBack();
  };
  goForward = () => {
    this.refs[this.state.WEBVIEW_REF].goForward();
  };

    
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header loading={this.state.loading} />
        
        <WebView style={styles.webView}
          source={{uri: 'http://www.irishbloke.net'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          ref={this.state.WEBVIEW_REF}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
          >
        </WebView>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.goBack()}
            disabled={this.state.canGoBack}
          >
            <Text style={styles.icon}>⬅️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goForward()}>
            <Text style={styles.icon}> ➡️</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Header = ({ loading }) => (
  <View style={styles.header}>
    <Text style={styles.title}>Header</Text>
    {loading ? <ActivityIndicator color="blue" /> : null}
  </View>
);

const Footer = context => (
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