import React from 'react';
import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Picker, ScrollView, Alert, TouchableOpacity, BackHandler, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { DocumentPicker } from 'expo';
import CheckBox  from '@react-native-community/checkbox';
import API_config from '../../../config/API_config';
import { bindActionCreators } from 'redux';
import { getConfigForm, editConfigForm, addConfigForm } from '../../../action/configForm';
import { getAsyncStorage } from '../../../action/asyncStorage';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { getProfile } from '../../../action/profile';
import moment from 'moment'

class EditConfigurationForm extends React.Component {
    constructor(props){
        super(props)
        const {data} = this.props.navigation.state.params;
        this.state = {
            id: data.id,
            tanggal_mulai:new Date(),
            namapelanggan: data.namapelanggan,
            lokasi: data.lokasi,
            tanggalpemasangan: data.tanggalpemasangan,
            konfigurasi:"",
            date_created:"",
            edited_at:"",
            beam: data.beam,
            modem: data.modemid
        }
        this.initialState = this.state
    }
    componentDidMount(){
        this.props.getAsyncStorage('user');
        this.getConfigForm()
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.user !== this.props.user) {
          this.getProfile();
        }
        if (prevProps.configFormEdited !== this.props.configFormEdited) {
            if (this.props.configFormEdited !== null) {
                if (this.props.configFormEdited.status) {
                    alert(this.props.configFormEdited.message);
                    this.props.navigation.goBack();
                }
            }
        }
    }
    initialState = {}
    getConfigForm = () => {
        let data = {
            id: this.props.navigation.state.params.data.id,
            token: API_config.token
          }
        this.props.getConfigForm(data);
    }
    getProfile= () => {
        let data = {
          email: this.props.user,
          token: API_config.token
        }
        this.props.getProfile(data)
    }

    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle: "Edit Configuration Form",
       }
    }
    
    /*state = {lingkup: '', jenis: ''}
    updateJenis = (jenis) => {
        this.setState({ jenis:jenis})
    }*/



    createTwoButtonAlert = () =>
    Alert.alert(
    "Configuration Form",
    "Data berhasil ditambahkan",
    [
        { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
    );

    handleCancel = () => {
        this.setState(this.initialState)
    }
    handleSave = () => {
        const data = {
            id: this.state.id,
            lokasi: this.state.lokasi,
            tanggalpemasangan: this.state.tanggalpemasangan ? new Date(this.state.tanggalpemasangan).getTime(): this.state.tanggalpemasangan,
            namapelanggan: this.state.namapelanggan,
            modemid: this.state.modem,
            beam: this.state.beam,
            token: API_config.token
        }
        this.props.editConfigForm(data);
    }

    render() {
        console.log(this.props)
        //const {navigate} = this.props.navigation;
        return (
            // <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                <ScrollView contentContainerStyle={{}}>
                    <View style={styles.container}>

                        <View style={styles.form}>
                            <Text style={styles.rowHeaderTitle}>
                                Nama Pelanggan
                            </Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={[styles.inputForm, {flex: 1}]}
                                    placeholderTextColor='#6F7EA8'
                                    value={this.state.namapelanggan}
                                    onChangeText={(nama) => this.setState({namapelanggan:nama})}
                                />
                            </View>

                            <Text style={styles.rowHeaderTitle}>
                            Lokasi
                            </Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={[styles.inputForm, {flex: 1}]}
                                    placeholderTextColor='#6F7EA8'
                                    value={this.state.lokasi}
                                    onChangeText={(posisi) => this.setState({lokasi:posisi})}
                                />
                            </View>

                            <Text style={styles.rowHeaderTitle}>
                                Tanggal Pemasangan
                            </Text>
                            <View>
                                <DatePicker
                                    style={{width: 295}}
                                    date={moment(this.state.tanggalpemasangan*1000).format("DD MMMM YYYY")}
                                    mode="date"
                                    placeholder="select date"
                                    format="DD MMMM YYYY"
                                    minDate="01 January 2010"
                                    maxDate="01 December 2030"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        backgroundColor: 'rgba(255,255,255,0.5)',
                                        marginLeft: 36
                                    }
                                    }}
                                    onDateChange={(tanggalpemasangan) => {this.setState({tanggalpemasangan: new Date(tanggalpemasangan).getTime()/1000})}}
                                />
                            </View>
                            
                            
                            <Text style={styles.rowHeaderTitle}>
                            Konfigurasi 
                            </Text>
                            <View style={styles.inputBox}>
                                <Picker
                                    selectedValue={this.state.beam}
                                    style={{flex: 1, height: 34}}
                                    onValueChange={(itemValue, itemIndex) => this.setState({beam: itemValue})}
                                >
                                    <Picker.Item label="-" value="" />
                                    <Picker.Item label="beam9" value="beam9" />
                                    <Picker.Item label="beam10" value="beam10" />
                                    <Picker.Item label="beam12" value="beam12" />
                                    <Picker.Item label="beam13" value="beam13" />
                                    <Picker.Item label="beam15" value="beam15" />
                                    <Picker.Item label="beam16" value="beam16" />
                                    <Picker.Item label="beam18" value="beam18" />
                                </Picker>
                            </View>
                            <Text style={styles.rowHeaderTitle}>
                                Modem id
                            </Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    value={this.state.modem}
                                    style={[styles.inputForm, {flex: 1}]}
                                    placeholderTextColor='#6F7EA8'
                                    onChangeText={(modem) => this.setState({modem})}
                                />
                            </View>
                            <View style={styles.saveCancel}>
                                    <TouchableOpacity style = {styles.buttonCancel} onPress={this.handleCancel}>
                                        <Text style = {styles.buttonText}><MaterialIcons name="settings-backup-restore" size={32} /></Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {styles.buttonSave} onPress={this.handleSave}>
                                        <Text style = {styles.buttonText}>Save</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            // </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#edf2f7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: Dimensions.get("window").height,
    },
    contentContainer: {
        paddingTop: 30,
        justifyContent: 'center',
    },
    header: {
        flex: 3,
    },
    form: {
        flex: 1,
        margin: 30,
    },
    rowHeaderTitle: {
        color: '#0A1944',
        fontSize: 14,
        fontStyle: 'normal',
        textAlign: 'left',
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        paddingTop: 10,
        paddingBottom: 5,
    },
    inputBox: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor:'#a0aec0',
        borderWidth : 1,
        opacity: 0.8,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10
    },
    inputForm: {
        color: '#0a1944', 
        marginLeft: 5
    },
    button: {
        borderRadius: 5,
        marginTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 9,
        paddingBottom: 9,
        backgroundColor: '#4285F4',
    },
    buttonPicker: {
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 9,
        paddingBottom: 9,
        backgroundColor: '#1e90ff',
    },
    textPicker: {
        fontSize: 12,
        color: '#0A1944',
    },
    text: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 16,
        color: 'black',
      },
      ImageIconStyle: {
        height: 80,
        width: 80,
        resizeMode: 'stretch',
    },
    saveCancel: {
        flexDirection: 'row',
        marginTop: 20
      },
    buttonSave:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        fontSize:16,
        fontWeight:"500",
        borderRadius:10,
        padding: 10,
        marginLeft: 5,
    },
    buttonCancel:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a5568',
        fontSize:16,
        fontWeight:"500",
        borderRadius:10,
        padding: 10,
        marginRight: 5,
    },
    buttonText: {
        fontSize:16,
        fontWeight:"bold",
        color:'#fff'
    }
});

function mapStateToProps(state) {
    return {
        user: state.getAsyncStorage.data,
        profile: state.profile.data,
        configForm: state.configForm.data,
        configFormEdited: state.editConfigForm.data,
        error: state.configForm.error,
        loading: state.configForm.loading,
    };
  }
  
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({ editConfigForm, getConfigForm, getAsyncStorage, getProfile }, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(EditConfigurationForm);