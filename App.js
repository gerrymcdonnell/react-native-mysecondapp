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
    WEBVIEW_REF: "weViewRef",
    homeURL:'http://news.irishbloke.net'
  };
  goBack = () => {
    this.refs[this.state.WEBVIEW_REF].goBack();
  };
  goForward = () => {
    this.refs[this.state.WEBVIEW_REF].goForward();
  };
  goHome = () => {
    //force the home url-doestn work
    //this.webView.uri=this.state.homeURL;
    //this.refs[this.state.WEBVIEW_REF].uri=this.state.homeURL;
  };

    
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header loading={this.state.loading} />
        
        <WebView style={styles.webView}
          source={{uri: this.state.homeURL}}
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
          <TouchableOpacity onPress={() => this.goHome()}>
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
    <Text style={styles.title}>App Header</Text>
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
    backgroundColor: "#8dc63f"
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8dc63f"
  }
});