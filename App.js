/**
 * Sample React Native app
 * 
 * @format
 * @flow 
 */


import React, {Component} from 'react';
import { StyleSheet, BackHandler, Alert} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './source/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

import Main from './source/Main';
import persist from './source/config/store';
import Dashboard from './source/pages/Dashboard';
import SideBar from './source/components/SideBar';
import DashboardNavigator from "./source/Navigation/DashboardNavigator";
import AppNavigator from "./source/Navigation/AppNavigator";
import { AppLoading, Icon } from "expo";
import * as Font from "expo-font";

console.disableYellowBox = true

const persistStore = persist(); 

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };
  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
  }
  
  handleBackButton = () => {
   Alert.alert(
       'Exit App',
       'Exiting the application?', [{
           text: 'Cancel',
           onPress: () => console.log('Cancel Pressed'),
           style: 'cancel'
       }, {
           text: 'OK',
           onPress: () => BackHandler.exitApp()
       }, ], {
           cancelable: false
       }
    )
    return true;
  } 
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-BlackItalic": require("./assets/fonts/Rubik-BlackItalic.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-BoldItalic": require("./assets/fonts/Rubik-BoldItalic.ttf"),
        "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-LightItalic": require("./assets/fonts/Rubik-LightItalic.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
        "Rubik-MediumItalic": require("./assets/fonts/Rubik-MediumItalic.ttf"),
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
        "Fa-Brands": require("./assets/fonts/fa-brands-400.ttf"),
        "Fa-Regular": require("./assets/fonts/fa-regular-400.ttf"),
        "Fa-Solid": require("./assets/fonts/fa-solid-900.ttf")
      })
    ]);
  };
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
  render(){
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else{
    return (
         <Provider store={store}>
           <PersistGate loading={null} persistor={persistStore.persistor}>  
             <AppNavigator/>
            </PersistGate>
         </Provider>
        
        //<DashboardNavigator/>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#0d47a1',
      justifyContent: 'flex-end',
  }
});
