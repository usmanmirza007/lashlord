import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
const image = require('./../image/splash.jpeg')
export default class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    setTimeout(() => { this.props.navigation.navigate('Webview', { loading: true }) }, 2000);
  }
  render() {
    return (
      <View style={styles.welcomeContainer}>
        <Image source={image} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  imagebakground: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
