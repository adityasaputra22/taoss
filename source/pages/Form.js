import React from 'react';
import { View, StyleSheet, TextInput, Text, Modal, ScrollView, Alert, TouchableOpacity,TouchableHighlight, Dimensions, ActivityIndicator } from 'react-native';
import API_config from '../config/API_config';
import { bindActionCreators } from 'redux';
import { getConfigForm, editConfigForm, addConfigForm, deleteConfigForm } from '../action/configForm';
import { getAsyncStorage } from '../action/asyncStorage';
import { connect } from 'react-redux';
import { Feather, AntDesign } from '@expo/vector-icons';
import { getProfile } from '../action/profile';
import Cardform from './components/configForm/elements/CardForm';

class ConfigurationForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            configForm: [],
            deletedId: '',
            configFormAvailable: true
        }
    }
    componentDidMount(){
        this.props.getAsyncStorage('user');
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.user !== this.props.user) {
            if (this.props.user !== null) {
                this.getProfile();
                this.getConfigForm();
            }
        }
        // if (prevProps.profile !== this.props.profile) {
        //     if (this.props.profile !== null) {
        //         if (this.props.profile.status) {
        //             this.getConfigForm();
        //         }
        //     }
        // }
        if (prevProps.configForm !== this.props.configForm) {
            if (this.props.configForm !== null) {
                if (this.props.configForm.status) {
                    this.setState({configForm: this.props.configForm.data})
                }else{
                    this.setState({configFormAvailable: false})
                }
            }
        }
        if (prevProps.delete !== this.props.delete) {
            if (this.props.delete !== null) {
                if (this.props.delete.status) {
                    this.getConfigForm();
                }
            }
        }
        if (prevProps.configFormEdited !== this.props.configFormEdited) {
            if (this.props.configFormEdited !== null) {
                if (this.props.configFormEdited.status) {
                    this.setState({configForm: []});
                    this.setState({configFormAvailable: true});
                    this.getConfigForm();
                }
            }
        }
        if (prevProps.configFormAdded !== this.props.configFormAdded) {
            if (this.props.configFormAdded !== null) {
                if (this.props.configFormAdded.status) {
                    this.setState({configForm: []})
                    this.setState({configFormAvailable: true});
                    this.getConfigForm();
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
    getConfigForm = () => {
        let data = {
          token: API_config.token
        }
        this.props.getConfigForm(data)
    }

    static navigationOptions = {
        headerTitle: "Configuration Form",
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
        this.setState({configForm: []})
        this.props.deleteConfigForm(data);
    }
    render() {
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
                            <Text style={styles.modalText}>Are you sure want to delete?</Text>

                            <View style={styles.modalButtons}>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: '#4a5568', marginHorizontal: 6 }}
                                onPress={() => {
                                    this.setState({modalVisible: false})
                                }}
                                >
                                <Text style={styles.textStyle}> Cancel </Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#ff4444", marginHorizontal: 6 }}
                                onPress={this.handleDelete}
                                >
                                <Text style={styles.textStyle}> Delete </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        </View>
                    </Modal>
                </View>
                <ScrollView contentContainerStyle={{}}>
                    <View style={styles.container}>
                        {
                            this.state.configFormAvailable 
                            ?
                                this.state.configForm.length
                                ?
                                this.state.configForm.map(data => {
                                    return <Cardform key={data.id} modal={this.handleModal} data={data} {...this.props}/>
                                })
                                :
                                <ActivityIndicator style={styles.centeredView} size="large" color="#ffff" />
                            :
                            <Text>Data tidak ada</Text>
                        }
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.fab} onPress={()=>this.props.navigation.navigate('AddConfigForm', { go_back_key: this.props.navigation.state.key })}>
                    <AntDesign name="pluscircle" color="#4285F4" size={50} />
                </TouchableOpacity>
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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
        configFormAdded: state.addConfigForm.data,
        configForm: state.configForm.data,
        error: state.configForm.error,
        loading: state.configForm.loading,
        delete: state.deleteConfigForm.data,
        configFormEdited: state.editConfigForm.data
    };
  }
  
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addConfigForm, editConfigForm, getConfigForm, getAsyncStorage, getProfile, deleteConfigForm }, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(ConfigurationForm);