import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, ActivityIndicator } from 'react-native'

export default class Loading extends Component {
    componentDidMount(){
        this.getAsyncStorage('user');
    }
    getAsyncStorage = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            this.props.navigation.navigate('AppMenu');
          }else{
            this.props.navigation.navigate('Auth');
        }
        } catch (error) {
            this.props.navigation.navigate('Auth');
        }
    };
    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#000000" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
