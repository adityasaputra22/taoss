import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Button, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';

import Logo from '../components/Logo';
import { ScrollView } from 'react-native-gesture-handler';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { getProfile, editProfile } from '../action/profile';
import { getAsyncStorage } from '../action/asyncStorage';
import { connect } from 'react-redux';
import { Card } from '../components';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        date_created:"",
        name: "",
        edit: false,
        newName: "",
    };
   }
  // getAsyncStorage = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };

  componentDidMount(){
    // this.getAsyncStorage('user');
    this.props.getAsyncStorage('user')
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.user !== this.props.user) {
      if (this.props.user !== null) {
        this.getProfile();
      }
    }
    if (prevProps.profileUpdated !== this.props.profileUpdated) {
      if (this.props.profile !== null) {
        if (this.props.profileUpdated.status) {
          this.setState({
            newName: this.props.profile.data.name,
            name: this.props.profileUpdated.data.name,
            email: this.props.profileUpdated.data.email,
            date_created: this.props.profileUpdated.data.date_created
          })
        }
      }
    }
    if (prevProps.profile !== this.props.profile) {
      if (this.props.profile !== null) {
        if (this.props.profile.status) {
          this.setState({
            newName: this.props.profile.data.name,
            name: this.props.profile.data.name,
            email: this.props.profile.data.email,
            date_created: this.props.profile.data.date_created
          })
        }
      }
    }
    if (prevProps.profileUpdated !== this.props.profileUpdated) {
      this.getProfile();
    }
  }
  getProfile= () => {
    let data = {
      email: this.props.user.email,
      token: API_config.token
    }
    this.props.getProfile(data)
  }
  handleSave = () => {
    let data = {
      email: this.props.user.email,
      name: this.state.newName,
      token: API_config.token
    }
    this.props.editProfile(data);
    this.setState({
      edit: false
    });
    this.getProfile();
  }

  handleCancel = () => {
    this.setState({
      edit: false,
      newName: this.state.name,
    })
  }

  static navigationOption = {
    title: 'MyProfileScreen',
  }

  render() {
      return(
            <View style = {styles.container}>
                  {
                    this.props.profile && this.props.profile.status
                    ?
                    <React.Fragment>
                      <Image style = {styles.imgprofile} source={require('../images/Profile4.png')}/>
                      {
                        this.state.edit
                        ?
                       <View style={styles.boxinput}> 
                        <TextInput style={styles.textimg} autoFocus={true} value={this.state.newName} onChangeText={(text) => this.setState({newName: text})}></TextInput>
                        </View>
                        :
                        <View style={styles.boxinput}> 
                        <Text style={styles.textimg}> {this.state.name} </Text>
                        </View>
                      }
                       <View style={[styles.boxinput, {backgroundColor:'#cbd5e0'}]}> 
                      <Text style={styles.textimg}> {this.state.email} </Text>
                      </View>
                      <Text style={styles.textemail}> Member since {moment(this.state.date_created*1000).format("DD MMMM YYYY")}  </Text>
                      {
                        this.state.edit
                        ?
                        <View style={styles.saveCancel}>
                          <TouchableOpacity style = {styles.buttonCancel} onPress={this.handleCancel}>
                            <Text style = {styles.buttonText}>Cancel</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.buttonSave} onPress={this.handleSave}>
                            <Text style = {styles.buttonText}>Save</Text>
                          </TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity style = {styles.button} onPress={()=>{this.setState({edit: true})}}>
                          <Text style = {styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                      }

                    </React.Fragment>
                    :
                    <ActivityIndicator size="large" color="#ffff" />
                  }
            </View>
      )
  }
}
  
  const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        backgroundColor: '#edf2f7',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imgprofile:{
      },
      saveCancel: {
        flexDirection: 'row',
        marginBottom:250
      },
      textimg: {
        fontSize : 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color :'#000000',
      },
      textemail: {
        fontSize : 18,
        fontStyle: 'normal',
        alignItems: 'center',
        justifyContent: 'center',
        color :'#000000',
        marginBottom:10
      },
      buttonText: {
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
        marginBottom:250
      },
      buttonSave:{
        width:150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        fontSize:16,
        fontWeight:"500",
        borderRadius:10,
        padding: 10,
      },
      buttonCancel:{
        width:150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a5568',
        fontSize:16,
        fontWeight:"500",
        borderRadius:10,
        padding: 10,
      },
      boxinput:{
        width:300,
        borderColor:'#a0aec0',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:20,
        fontSize:16,
        marginVertical:5,
      },
      signupButton:{
        color:'#87cefa',
        fontSize:14,
        fontWeight:'500'
      }
  });


  function mapStateToProps(state) {
    return {
      profile: state.profile.data,
      profileUpdated: state.editProfile.data,
      user: state.getAsyncStorage.data,
      error: state.profile.error,
      loading: state.profile.loading,
    };
  }
  
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getProfile, getAsyncStorage, editProfile }, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(MyProfile);