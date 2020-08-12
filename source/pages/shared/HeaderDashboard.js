import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

//tambahin biar ada garis 3 (menu) 
export default function Header ({navigation, headtitle} ){

    const openMenu = () => {
        navigation.openDrawer() 
    }

    return(
        <View style = {styles.header}>
            <MaterialIcons name= 'menu' size={25} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style = {styles.headerText}> {headtitle} </Text> 
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width : '200%',
        height : '100%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'center',
        //backgroundColor: 'skyblue'
    },
    headerText : {
        textAlign : 'center',
        alignItems :'center',
        justifyContent : 'center',
        fontWeight: 'bold',
        fontSize : 24,
        color : '#333',
        letterSpacing : 0,
        flex : 1,
        //marginTop : 30
    },
    titleText : {
        height : '80%',
        textAlign : 'center',
        alignItems :'center',
        justifyContent : 'center',
        //fontWeight: 'bold',
        fontSize : 20,
        color : '#333',
        flex : 1,
        //marginBottom : 35
    },
    icon: {
        position: 'absolute',
        left : 0
    }
});