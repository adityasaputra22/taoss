import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Picker, ScrollView, Alert, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { Card } from '../../../../components';
// import { Linking } from 'expo';

export default class Cardmaintenance extends Component {
    render() {
        console.log(this.props)
        return (
            <Card style={{marginBottom:20}}>   
                
                    <View style={styles.titleCard}>
                        <Text style={styles.titleTextCard}>Nomor ID {this.props.data.id}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.key}>Nama Pelanggan</Text>
                        <Text style={styles.value}>{this.props.data.namapelanggan}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.key}>Nomor Handphone</Text>
                        <Text style={styles.value}>{this.props.data.nomorhp}</Text>
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
                        <Text style={styles.key}>Tgl Pengaduan</Text>
                        <Text style={styles.value}>{moment(this.props.data.tanggalpengaduan*1000).format("DD MMMM YYYY")}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.key}>Pengaduan</Text>
                        <Text style={styles.value}>{this.props.data.pengaduan}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.key}>Detail Keluhan</Text>
                        <Text style={styles.value}>{this.props.data.detailkeluhan}</Text>
                    </View>
               
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#718096',
        borderRadius:10,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: "#0A1944",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        justifyContent: 'flex-start',
    },
    field: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal:10,
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
        justifyContent: "center",
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