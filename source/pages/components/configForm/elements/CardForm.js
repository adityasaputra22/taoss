import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Picker, ScrollView, Alert, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment';
import { Card } from '../../../../components';
// import { Linking } from 'expo';

export default class Cardform extends Component {
    handleDownloadForm = (kode) => {
        Linking.openURL('http://taoss.xyz/oss/download/form/'+kode)
    }
    handleDownloadConfig = (kode) => {
        Linking.openURL('http://taoss.xyz/oss/download/config/'+kode)
    }
    render() {
        console.log(this.props.data)
        if (this.props.user) {
            return (
                <Card style={{marginBottom:20}}>   
                    
                        <View style={[styles.titleCard, {justifyContent: this.props.user.id === this.props.data.user_id ? 'space-between' : 'center'}]}>
                            {
                                this.props.user.id === this.props.data.user_id
                                ?
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditConfigForm', {data: this.props.data})}>
                                    <FontAwesome5 name="edit" size={19} color="#fff" style={{marginHorizontal: 10}}><Text style = {{color:'#fff', fontWeight:'bold', fontSize:16}}> Edit </Text></FontAwesome5>
                                </TouchableOpacity>
                                :
                                null
                            }
                            <Text style={styles.titleTextCard}>Nomor ID {this.props.data.id}</Text>
                            {
                                this.props.user.id === this.props.data.user_id
                                ?
                                <TouchableOpacity onPress={()=>this.props.modal(true, this.props.data.id)}>
                                    <FontAwesome5 name="trash" size={19} color="#ff4444" style={{marginHorizontal: 10}}/>
                                </TouchableOpacity>
                                :
                                null
                            }
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.key}>Nama Pelanggan</Text>
                            <Text style={styles.value}>{this.props.data.namapelanggan}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.key}>Lokasi</Text>
                            <Text style={styles.value}>{this.props.data.lokasi}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.key}>Modem</Text>
                            <Text style={styles.value}>{this.props.data.modemid}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.key}>Tanggal Pemasangan</Text>
                            <Text style={styles.value}>{moment(this.props.data.tanggalpemasangan*1000).format("DD MMMM YYYY")}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.key}>Beam</Text>
                            <Text style={styles.value}>{this.props.data.beam ? this.props.data.beam : '-'}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.key}>Teknisi</Text>
                            <Text style={styles.value}>{this.props.data.name}</Text>
                        </View>
                        <View style={styles.field}>
                            <TouchableOpacity style = {[styles.button, {marginTop: 10}]} onPress={() => this.handleDownloadForm(this.props.data.kode)}>
                                <Text style = {styles.buttonText}>Download Form</Text>    
                            </TouchableOpacity>
                        </View>
                        <View style={styles.field}>
                            <TouchableOpacity style = {styles.button} onPress={() => this.handleDownloadConfig(this.props.data.kode)}>
                                <Text style = {styles.buttonText}>Download Config</Text>    
                            </TouchableOpacity>
                        </View>
                </Card>
            )       
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#718096',
        borderRadius:10,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // paddingVertical:10,
    },
    field: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal:20,
        marginBottom: 6
    },
    key: {
        flex: 1,
        color:'#000000'
    },
    value: {
        flex: 1,
        color:'#000000'
    },
    titleCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        // paddingVertical: 7,
        borderBottomWidth: 2,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        borderColor: 'rgba(255,255,255,0.5)',
        backgroundColor: '#4285F4',
        height: '100%',
        marginBottom: 5,
    },
    titleTextCard: {
        fontWeight:"bold",
        color:'#000000',
        marginVertical: 10,
    },
    buttonText: {
        fontSize:15,
        fontWeight:"bold",
        color:'#fff'
      },
    button:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4285F4',
    fontSize:16,
    fontWeight:"500",
    borderRadius:10,
    marginBottom: 8,
    paddingVertical:15,
    paddingHorizontal:20,
    },
    fab: {
        position: "absolute",
        bottom: 22,
        right: 18,
        opacity: 0.5
    },
})