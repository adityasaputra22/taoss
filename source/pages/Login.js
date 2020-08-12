import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, AsyncStorage, ActivityIndicator, Linking } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Block, Card, Text, Icon, Label } from '../components';
import Logo from '../components/Logo';
import { ScrollView } from 'react-native-gesture-handler';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { getUser, postUser } from '../action/user';
import { getAsyncStorage, setAsyncStorage, removeAsyncStorage } from '../action/asyncStorage';
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      user_password: ""
    };
  }
  componentDidMount(){
    // this.setasd()
  }
  componentDidUpdate(prevProps, prepState){
    if (prevProps.user !== this.props.user) {
      if (this.props.user !== null) {
        if (this.props.user.status) {
          this.props.setAsyncStorage({key: 'user', value: this.props.user.data});
          this.props.navigation.navigate('AppMenu');
        }else{
          alert(this.props.user.message)
        }
      }
    }
  }
  Signup() {
    this.props.navigation.navigate('SignupMenu');
  }
  handleForgotPassword = () => {
    Linking.openURL('http://taoss.xyz/oss/auth/forgotpassword')
  }
  UserLoginFunction = () => {
    const data = {
      email: this.state.email,
      password: this.state.user_password,
      token: API_config.token
    }
    this.props.getUser(data);
    // const config = {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // }
    // Axios.post(`${API_config.url}/api/auth/login`, data, config)
    //   .then((response) => {
    //     // If server response message same as Data Matched
    //     console.log("logged in");
    //     alert('login sukses');
      
    //       //Then open Profile activity and send user email to profile activity.
    //       //this.props.navigation.navigate('Second', { Email: UserEmail });
    //     this.props.navigation.navigate('AppMenu');
    //   }).catch((error) => {

    //     //jika response codenya itu 500 berarti servernya belum tersambung
    //     //jika response codenya itu 400 berarti request yg diterima server tidak valid
    //     if (error.response.status === 500) {
    //       alert('server is offline');
    //     }else if(error.response.status === 400){
    //       if (error.response.data.status === false) {
    //         alert(error.response.data.message)
    //       }
    //     }
    //     // alert(error.response.data.message);
    //   });
  }

  // setasd = async (key) => {
  //     AsyncStorage.removeItem('user')
  //     .then(()=> {
  //       console.log('berhasil hapus')
  //     })
  //     .catch(err => {
  //       console.log('gagal', err)
  //     })
  // };
  // asd = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //     }else{
  //       console.log('tidak ada')
  //     }
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // };

  render() {
      const {navigate} = this.props.navigation;
      return(
        <ScrollView style={{ backgroundColor: '#002171'}}>
            <KeyboardAvoidingView 
            behavior={Platform.select({ android: 'padding', ios: 'padding' })}
            style={{ flex: 1}}>
             <View style = {styles.container}>
                <Image style = {{marginTop:5}} source = {require('../images/Logo-OSS-400.png')}/>
                
                  <View style = {styles.boxinput}>
                    <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#ffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                    />
                  </View>

                  <View style = {styles.boxinput}>
                    <TextInput 
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        placeholderTextColor="#ffff"
                        secureTextEntry={true}
                        onChangeText={user_password => this.setState({user_password})}
                    />
                  </View>

                <TouchableOpacity style = {styles.button} onPress = {this.UserLoginFunction}>
                   {
                      this.props.loading
                      ?
                      <ActivityIndicator size="large" color="#ffff" />
                      :
                      <Text style = {styles.buttonText}>Login</Text>    
                    }    
                </TouchableOpacity>
              
              <View style ={{marginTop :30}}>
                <TouchableOpacity onPress={()=> this.handleForgotPassword ()}>
                  <Text style = {styles.signupButton}> Forgot Password? </Text>
                </TouchableOpacity>
              </View>  
              <View style = {styles.signupTextBorder}>
                  <Text style = {styles.signupText}> Do not have an account yet? </Text>
                  <TouchableOpacity onPress={()=>navigate('SignupMenu')}>
                    <Text style = {styles.signupButton}> Sign up </Text>
                  </TouchableOpacity>
              </View>
            </View>
            </KeyboardAvoidingView>
        </ScrollView> 
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#002171',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    signupTextBorder: {
      flexGrow: 1,
      fontSize: 20,
      //alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 5,
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
      padding: 10,
      marginVertical:5
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
  