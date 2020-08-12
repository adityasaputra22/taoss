import React, {Component} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import {connect} from 'react-redux';
import Routes from './components/Routes';

class Main extends Component {

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#4e73df'
                    barStyle='light-content'
                />
                <Routes/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    }
});

export default connect (null,null)(Main)
  