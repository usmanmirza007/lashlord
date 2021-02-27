import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  StatusBar,
} from 'react-native';

import { WebView } from 'react-native-webview';
import SpinnerScreen from './SpinnerScreen'
const {
  height: ScreenHeight,
  width: ScreenWidth
} = Dimensions.get('window');
const Webview = ({ route }) => {
  // const [visible, setVisible] = useState('')
  // const loading = route.params.params

  //   const renderLoadingView = () => {
  //     return (
  //         <ActivityIndicator
  //            animating = {visible}
  //            color = '#bc2b78'
  //            size = "large"
  //           //  style = {styles.activityIndicator}
  //            hidesWhenStopped={true} 

  //         />
  //     );
  // }
  // const showSpinner = () => {
  //   console.log('Show Spinner');
  //   setVisible(true)
  //   // this.setState({ visible: true });
  // }

  // const hideSpinner = () => {
  //   console.log('Hide Spinner');
  //   setVisible(false)
  //   // this.setState({ visible: false });
  // }
  // const onPressButtonURL = (url) => {
  //   setVisible(url)
  //   console.log('sdfs', url);
  // }
  return (
      <WebView
        source={{uri: 'https://lashhlordsz.co.uk/'}}
        style={{ height: '100%', width: '100%', flex: 1 }}
      />
  );
};

export default Webview;