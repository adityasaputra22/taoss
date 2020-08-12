import React from 'react';
import { View, StyleSheet, TextInput, Text, Modal, ScrollView, Alert, TouchableOpacity,TouchableHighlight, Dimensions, ActivityIndicator } from 'react-native';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { getMaintenanceForm, deleteMaintenanceForm } from '../action/maintenanceForm';
import { getAsyncStorage } from '../action/asyncStorage';
import { connect } from 'react-redux';
import { Feather, AntDesign } from '@expo/vector-icons';
import { getProfile } from '../action/profile';
import Cardmaintenance from './components/maintenanceForm/elements/CardMaintenance';

class MaintenanceForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            maintenanceForm: [],
            deletedId: '',
            maintenanceFormAvailable: true
        }
    }
    componentDidMount(){
        this.props.getAsyncStorage('user');
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.user !== this.props.user) {
            if (this.props.user !== null) {
                this.getProfile();
                this.getMaintenanceForm();
            }
        }
        if (prevProps.maintenanceForm !== this.props.maintenanceForm) {
            if (this.props.maintenanceForm !== null) {
                if (this.props.maintenanceForm.status) {
                    this.setState({maintenanceForm: this.props.maintenanceForm.data})
                }else{
                    this.setState({maintenanceFormAvailable: false})
                }
            }
        }
        if (prevProps.delete !== this.props.delete) {
            if (this.props.delete !== null) {
                if (this.props.delete.status) {
                    this.getmaintenanceForm();
                }
            }
        }

    }
    getProfile= () => {
        let data = {
          email: this.props.user.email,
          token: API_config.token
        }
        this.props.getProfile(data)
    }
    getMaintenanceForm = () => {
        let data = {
          id:this.props.user.id,  
          token: API_config.token
        }
        this.props.getMaintenanceForm(data)
    }

    static navigationOptions = {
        headerTitle: "Maintenance Form",
        title: 'FormScreen'
      };
    
    /*state = {lingkup: '', jenis: ''}
    updateJenis = (jenis) => {
        this.setState({ jenis:jenis})
    }*/

    handleModal = (n, id) =>{
        this.setState({
            modalVisible: n,
            deletedId: id
        })
    }
    handleDelete = () => {
        let data = {
            id: this.state.deletedId,
            token: API_config.token
          }
        this.setState({modalVisible: false})
        this.setState({maintenanceForm: []})
        this.props.deleteMaintenanceForm(data);
    }
    render() {
        console.log('ini configggggggggg', this.props)
        //const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Anda yakin ingin menghapus?</Text>

                            <View style={styles.modalButtons}>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginHorizontal: 6 }}
                                onPress={() => {
                                    this.setState({modalVisible: false})
                                }}
                                >
                                <Text style={styles.textStyle}>Batal</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#c81912", marginHorizontal: 6 }}
                                onPress={this.handleDelete}
                                >
                                <Text style={styles.textStyle}>Hapus</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        </View>
                    </Modal>
                </View>
                <ScrollView contentContainerStyle={{}}>
                    <View style={styles.container}>
                        {
                            this.state.maintenanceFormAvailable 
                            ?
                                this.state.maintenanceForm.length
                                ?
                                this.state.maintenanceForm.map(data => {
                                    return <Cardmaintenance modal={this.handleModal} data={data} {...this.props}/>
                                })
                                :
                                <ActivityIndicator style={styles.centeredView} size="large" color="#ffff" />
                            :
                            <Text>Data tidak ada</Text>
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        padding: 16, 
        paddingTop: 30,
        // flexGrow: 1,
        backgroundColor: '#edf2f7',
        minHeight: Dimensions.get("window").height
        // alignItems: 'center',
        // justifyContent: 'center',
        // minHeight: '100vh'
    },
    fab: {
        position: "absolute",
        bottom: 22,
        right: 18,
        opacity: 0.8
    },
    contentContainer: {
        paddingTop: 30,
        justifyContent: 'center',
    },
    head: { height: 40,
        backgroundColor: 'red',
        color: 'red' },
    text: { 
        margin: 6,
        color: '#fff'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        justifyContent: "center",
      },
      modalButtons: {
          flex: 1,
          flexDirection: "row",
          maxHeight: 40
      }
});

function mapStateToProps(state) {
    return {
        user: state.getAsyncStorage.data,
        profile: state.profile.data,
        maintenanceForm: state.maintenanceForm.data,
        error: state.maintenanceForm.error,
        loading: state.maintenanceForm.loading,
        delete: state.deleteMaintenanceForm.data,
    };
  }
  
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getAsyncStorage, getProfile, getMaintenanceForm, deleteMaintenanceForm }, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(MaintenanceForm);