import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Picker, ScrollView, Alert, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import moment from 'moment'
// import { Linking } from 'expo';

export default class Card extends Component {
    handleDownloadForm = (link) => {
        Linking.openURL(link)
    }
    handleDownloadConfig = (link) => {
        Linking.openURL(link)
    }
    render() {
        if (this.props.user) {
            return (
                <View style={styles.card}>
                    <View style={[styles.titleCard, {justifyContent: this.props.user.id === this.props.data.user_id ? 'space-between' : 'center'}]}>
                        {
                            this.props.user.id === this.props.data.user_id
                            ?
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditConfigForm', {data: this.props.data})}>
                                <Feather name="edit" color="#649d66" size={19} style={{marginHorizontal: 10}} />
                            </TouchableOpacity>
                            :
                            null
                        }
                        <Text style={styles.titleTextCard}>Nomor ID {this.props.data.id}</Text>
                        {
                            this.props.user.id === this.props.data.user_id
                            ?
                            <TouchableOpacity onPress={()=>this.props.modal(true, this.props.data.id)}>
                                <Feather name="trash-2" color="#c81912" size={19} style={{marginHorizontal: 10}}/>
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
                        <Text style={styles.key}>Tgl Pemasangan</Text>
                        <Text style={styles.value}>{moment(this.props.data.tanggalpemasangan*1000).format("DD-MM-YYYY")}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.key}>Beam</Text>
                        <Text style={styles.value}>{this.props.data.beam ? this.props.data.beam : '-'}</Text>
                    </View>
                    <View style={styles.field}>
                        <TouchableOpacity style = {[styles.button, {marginTop: 10}]} onPress={() => this.handleDownloadForm(this.props.data.download_form)}>
                            <Text style = {styles.buttonText}>Download Form</Text>    
                        </TouchableOpacity>
                    </View>
                    <View style={styles.field}>
                        <TouchableOpacity style = {styles.button} onPress={() => this.handleDownloadConfig(this.props.data.download_config)}>
                            <Text style = {styles.buttonText}>Download Config</Text>    
                        </TouchableOpacity>
                    </View>
                </View>
            )       
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.5)',
        borderRadius:10,
        overflow: 'hidden',
        marginBottom: 20
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
        fontWeight:"bold",
        color:'#87cefa'
    },
    value: {
        flex: 1,
        fontWeight:"bold",
        color:'#87cefa'
    },
    titleCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        // paddingVertical: 7,
        borderBottomWidth: 2,
        borderColor: 'rgba(255,255,255,0.5)',
        backgroundColor: '#002171',
        height: '100%',
        marginBottom: 5,
    },
    titleTextCard: {
        fontWeight:"bold",
        color:'#87cefa',
        marginVertical: 10,
    },
    buttonText: {
        fontSize:15,
        fontWeight:"bold",
        color:'#87cefa'
      },
    button:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#002171',
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