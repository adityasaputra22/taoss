import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() {
        return(
            <View>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style= {{alignItems: "flex-start", margin: 16}} 
                    onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size = {24} color="#161924"/>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:"center", justifyContent: "center"}}>
                        <Text style={styles.text}> {this.props.name} </Text>
                    </View>    
                </SafeAreaView>
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
    logo: {
        width: 80,
        height:80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF",
        fontSize: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 15,
        flexDirection:'row'
    }
});