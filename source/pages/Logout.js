import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { removeAsyncStorage } from '../action/asyncStorage';
import { connect } from 'react-redux';

class Logout extends Component {
    componentDidMount(){
        this.props.removeAsyncStorage('user');
        this.props.navigation.navigate('LoginMenu');
    }
    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
})

function mapStateToProps(state) {
    return {
        logout: state.removeAsyncStorage.data,
        error: state.removeAsyncStorage.error,
        loading: state.removeAsyncStorage.loading,
    };
  }
  
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({ removeAsyncStorage }, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(Logout);
