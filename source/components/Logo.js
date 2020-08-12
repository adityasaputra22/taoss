import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
    render () {
        return (
                
                <View style = {styles.container}>
                    <Image
                    source = {require('../images/Logo-OSS-400.png')}/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems:'center',
        marginTop:0,
    },
    textlogo: {
        fontSize : 18,
        fontStyle: "italic",
        alignItems: 'center',
        justifyContent: 'center',
        color :'#87cefa',
        marginVertical:2,
    }
});