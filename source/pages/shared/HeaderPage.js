import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function HeaderPage ({navigation, title} ){

    const openMenu = () => {
        navigation.openDrawer() 
    }

    return(
        <View style = {styles.header}>
            <MaterialIcons name= 'menu' size={25} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style = {styles.titleText}> {title} </Text> 
            </View>
        </View>
    )
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