import PropTypes from "prop-types";
import React, {Component} from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";

const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string
};

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    label: ""
};

const styles = StyleSheet.create ({
    inputBox : {
        width : 300,
        backgroundColor : 'rgba(255,255,255, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical:10,
        fontSize : 16, 
        color : "#ffffff",
        marginVertical: 5
    }
})

class InputText extends Component {

    render () {
        const { value, secureTextEntry, maxLength, keyboardType, placeholder, onChangeText, onSubmitEditing} = this.props;
        return (
            <View>
              <TextInput
                style = {styles.inputBox}
                underLineColorAndroid= "rgba(0,0,0,0)"
                placeholder= {placeholder}
                placeholderTextColor = "rgba(255,255,255,0.8)"
                selectionColor = "#999999"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
                returnKeyType = "next"
                value={value}
                onSubmitEditing= {onSubmitEditing}
                onChangeText={onChangeText}         
              />
            </View>
        );   
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;
