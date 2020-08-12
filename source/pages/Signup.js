import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Field, reduxForm } from 'redux-form';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../components/Logo';
import InputText from '../components/InputText';
import { onChange } from 'react-native-reanimated';
import { NavigationEvents } from 'react-navigation';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { getUser, postUser } from '../action/user';
import { connect } from 'react-redux';



class Signup extends Component {
  
    constructor() {
      super();
      this.state = {
        longname: "",
        email: "",
        user_password: "",
        loading: false,
        disabled: false
      };
    }
    componentDidUpdate(prevProps, prepState){
      if (prevProps.user !== this.props.user) {
        if (this.props.user !== null) {
          if (this.props.user.status) {
            alert(this.props.user.message);
            this.props.navigation.navigate('LoginMenu');
          }else{
            alert(this.props.user.message);
          }
        }
      }
      if (prevProps.loading !== this.props.loading) {
        this.setState({disabled: true})
      }
    }
    goBack() {
      Actions.login()
    }

    createNewUser = () => {
      alert("boom")
    }

    onSubmit = (values) => {
      console.log(values);
      
    }


    insertNewUser = () => {
      if (this.state.longname, this.state.email,this.state.user_password === "" ) {
        alert  ('Field is Required!');
      } else
      if ( this.state.user_password.length <8 ){
       alert ('Password too short!');
      }
      else {
      const data = {
        name: this.state.longname,
        email: this.state.email,
        password: this.state.user_password,
        image: null,
        token: API_config.token
    }
    this.props.postUser(data);
    }
      // this.setState({ loading: true, disabled: true }, () =>
      // {
      //   fetch(`${API_config.url}/api/auth/signup`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(
      //       {
      //           name: this.state.longname,
      //           email: this.state.email,
      //           password: this.state.user_password,
      //           image: null,
      //           token: API_config.token
      //       })
      //   }).then((response) => response.json()).then((responseJson) =>
      //         {
      //             alert(responseJson);
      //             this.setState({ loading: false, disabled: false });
      //         }).catch((error) =>
      //         {
      //             console.error(error);
      //             this.setState({ loading: false, disabled: false });
      //         });
      //       });
    }

    renderTextInput = (field) => {
      const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
      return (
        <View>
          <InputText
            onChangeText={onChange}
            minLength={8}
            maxLength={maxLength}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            label={label}
            {...restInput} />
            { (touched && error) && <Text style = {styles.errorText}> {error} </Text> }
        </View>
        //Bagian text {error} masih tidak kebaca
      );
    }

    render() {
      console.log(this.props)
        const { navigate } = this.props.navigation;
        return(
          <ScrollView style={{ backgroundColor: '#002171'}}>
            <KeyboardAvoidingView 
            behavior={Platform.select({ android: 'padding', ios: 'padding' })}
            style={{ flex: 1}}>
            <View style= {styles.container}>
                <Image style = {{marginTop:5}}source = {require('../images/Logo-OSS-400.png')}/>

                <View style = {styles.boxinput}>
                  <TextInput
                    name="name"
                    placeholder="Name"
                    component={this.renderTextInput}
                    placeholderTextColor="#ffff"
                    selectionColor="#fff"
                    onChangeText = {(text) => this.setState({longname: text})} />
                </View>

                <View style = {styles.boxinput}>
                  <TextInput
                    name="email"
                    placeholder="Email"
                    component={this.renderTextInput} 
                    placeholderTextColor="#ffff"
                    selectionColor="#fff"
                    onChangeText = {(text) => this.setState({email: text})} />
                </View>

                <View style = {styles.boxinput}> 
                  <TextInput 
                    name="user_password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={this.renderTextInput} 
                    placeholderTextColor="#ffff"
                    selectionColor="#fff"
                    onChangeText = {(text) => this.setState({user_password: text})} />
                </View>
                
                  <TouchableOpacity style = {styles.button} onPress= { this.insertNewUser }>
                    {
                      this.props.loading
                      ?
                      <ActivityIndicator size="large" color="#ffff" />
                      :
                      <Text style = {styles.buttonText}>Sign up</Text>    
                    }
                  </TouchableOpacity>
                
                <View style = {styles.signupTextBorder}>
                    <Text style = {styles.signupText}> Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigate('LoginMenu')}>
                    <Text style = {styles.signupButton}> Sign in </Text>
                    </TouchableOpacity>
                </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.name){
        errors.name = "Name is Required"
    }
    if(!values.email){
        errors.email = "Email is Required"
    }
    if(!values.password){
        errors.password = "Password is Required"
    }
    return errors;
}

  

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#002171',
    alignItems: 'center',
    //ustifyContent: 'center',
  },
  signupTextBorder: {
    flexGrow: 1,
    fontSize: 20,
    //alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection:'row'
  },
  signupText:{
    color:'rgba(255,255,255,0.3)',
    fontSize:14
  },
  signupButton:{
    color:'#fff',
    fontSize:14,
    fontWeight:'500'
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
  buttonText: {
    fontSize:16,
    fontWeight:"bold",
    color:'#fff'
  },
  errorText: {
    color:"#ffff",
    fontSize:12,
  }
});

function mapStateToProps(state) {
  return {
    user: state.postUser.data,
    error: state.postUser.error,
    loading: state.postUser.loading,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ postUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Signup);