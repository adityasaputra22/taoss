import React, {Component} from 'react';
import {StyleSheet, Text, View, BackHandler} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default class HeaderPage extends Component{
    back = () => {
        this.props.navigation.goBack(null);
    }
    render(){
        console.log('ini navvvvv', this.props)
        return(
            <View style = {styles.header}>
                <MaterialIcons name= 'keyboard-backspace' size={25} onPress={this.back} style={styles.icon} />
                <View>
                    <Text style = {styles.titleText}> {this.props.title} </Text> 
                </View>
            </View>
        )
    }
    static propTypes = {
        title: PropTypes.string,
        navigation: PropTypes.object,
        disableBackButton: PropTypes.bool
    }
}

const styles = StyleSheet.create({
    header: {
        width : '200%',
        height : '100%',
        flexDirection : 'row',
        //alignItems: 'center',
        //justifyContent : 'center',
        //backgroundColor: 'skyblue'
    },
    titleText : {
        //textAlign : 'center',
        //alignItems :'center',
        //justifyContent : 'center',
        //fontWeight: 'bold',
        fontSize : 20,
        color : '#333',
        flex : 1,
        left : 40
        //marginBottom : 35
    },
    icon: {
        position: 'absolute',
        left : 0
    }
});