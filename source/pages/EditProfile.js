import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';

import { ScrollView } from 'react-native-gesture-handler';

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        date_created:"",
        longname: "",
        newlongname: "",
        confirmpass: "",
        loading: false,
        disabled: false
    };
   }
      static navigationOption = {
        title: 'EditProfileScreen'
      }

      render() {
          return(
            <View style = {styles.container}>  
              
                  <Image style = {styles.imgprofile} source={require('../images/Profile_resize.png')}/>
                  <Text style={styles.textimg}> User </Text>
                  <Text style={styles.textimg}> Email@gmail.com </Text>
                  <Text style={styles.textemail}> Member since 10 March 2020 </Text>

                  <View style = {styles.boxinput}>
                    <TextInput
                      name="Current Password"
                      //placeholder="Current Password"
                      component={this.renderTextInput}
                      placeholderTextColor="#ffff"
                      selectionColor="#fff"
                      onChangeText = {(text) => this.setState({currentpass: text})} />
                  </View>
                 
            </View>
          )
      }
  }
  
  const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        backgroundColor: '#4e73df',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textimg: {
        fontSize : 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color :'#87cefa',
      },
      textemail: {
        fontSize : 18,
        fontStyle: 'normal',
        alignItems: 'center',
        justifyContent: 'center',
        color :'#87cefa',
      },
      buttonText: {
        fontSize:16,
        fontWeight:"bold",
        color:'#87cefa'
      },
      button:{
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#002171',
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
        color:'#87cefa',
        fontSize:14,
        fontWeight:'500'
      }
  });