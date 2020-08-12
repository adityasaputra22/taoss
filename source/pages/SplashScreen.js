import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, ActivityIndicator } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Block, Card, Text, Icon, Label } from '../components';
import Logo from '../components/Logo';
import { ScrollView } from 'react-native-gesture-handler';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { getUser, postUser } from '../action/user';
import { getAsyncStorage, setAsyncStorage, removeAsyncStorage } from '../action/asyncStorage';
import { connect } from 'react-redux';

class SplashScreen extends Component {
  render() {
      const {navigate} = this.props.navigation;
      return(
              <View style = {styles.container}>
                <Logo/> 
            </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#002171',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextBorder: {
      flexGrow: 1,
      fontSize: 20,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 20,
      flexDirection:'row'
    },
    signupText:{
      color:'rgba(255,255,255,0.3)',
      fontSize:14
    },
    buttonText: {
      fontFamily:'Rubik-Regular',
      fontSize:16,
      fontWeight:"bold",
      color:'#fff'
    },
    button:{
      width:300,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4285F4',
      fontSize:16,
      fontWeight:"500",
      borderRadius:10,
      padding: 10
    },
    boxinput:{
      width:300,
      backgroundColor:'rgba(255,255,255,0.5)',
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:20,
      fontSize:16,
      marginVertical:5,
    },
    signupButton:{
      color:'#fff',
      fontSize:14,
      fontWeight:'500'
    }
});

function mapStateToProps(state) {
  return {
    auth: state.getAsyncStorage.data,
    user: state.user.data,
    error: state.user.error,
    loading: state.user.loading,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getUser, getAsyncStorage, setAsyncStorage, removeAsyncStorage }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
  