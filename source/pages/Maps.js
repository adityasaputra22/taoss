import React, { Component } from 'react';
import { TouchableOpacity,Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, View, Button, TextInput, ActivityIndicator, Picker, Alert} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import * as theme from '../constants/theme';
import { getLatLngObj } from "tle.js";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
   map: {
    height: 800,
    width: 450
  },
  saveButton: {
    borderRadius:10,
    backgroundColor: '#4285F4',
    padding: 15,
    margin: 5,
  },
  setLocation: {
    borderRadius:100,
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#edf2f7',
  },
  buttonMarker: {
    flexDirection: 'row',
    marginTop: 5,
    padding : 5
  },
  inputBox :{
    height: 40, 
    borderColor: '#a0aec0', 
    borderWidth: 1,
    borderRadius : 10,
    paddingVertical:10,
    paddingHorizontal:20,
  }
});

function MakeTLE(a)
{
return [a.line1, a.line2]  
}

class Maps extends Component {

  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 30
    },
    headerRightContainerStyle: {
      paddingRight: 30
    }
  }
//

    state = {
        Location: {},
        errorMessage: '',
        latitude: null,
        longitude: null,
    }
  constructor(props) {
    super(props);
    this.state = {
        isLoading5: true,
        isLoading: true,
        polya: 0,
        polyb: 0,
        polyc: 0,
        polyd: 0,
        swidth: 0,
        name: '',
        title: ""

    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

getInitialState() {
  return {
    region: {
      latitude: 0,
      longitude: 95,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

getLocation = () => {
  this.setState({     
    region: {
  latitude: this.state.latitude - 0.025,
  longitude: this.state.longitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}})
}

componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.setState ({
          latitude,
          longitude,
          isLoading: false,
        });
        },
        {enableHighAccuracy: true, Timeout: 20000}
        );
  }

  findCurrentLocationAsync = async () => {

  let { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status != 'granted') {
    console.log('PERMISSION NOT GRANTED!');

    this.setState({
      errorMessage: 'PERMISSION NOT GRANTED'
    })
  }
  const location = await Location.getCurrentPositionAsync();

  this.setState({
    location
  })

}

   updateLocation = () => {
      this.setState({     
        polya : this.state.latitude,
    polyb : this.state.longitude,
    polyc : latLonObj.lat,
    polyd : latLonObj.lng})
  }

onLocationSelect = () => alert(this.state.userLocation);

  _simpleAlertHandler=()=>{
    //function to make simple alert
    alert('Satellite not found');
    this.setState({ isLoading5: true });
    this.fetchData("SES-12");
  }

fetchData(text) {
    this.setState({ text });
    const url = 'https://data.ivanstanojevic.me/api/tle?search=';
    fetch(url + text)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          Satellite: responseJson,
          isLoading5: false
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

onRegionChange = (region) => {}

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

handleNameChange(name) {
  this.setState({ name });
}

componentDidMount() {
    this.fetchData("SES-12")
  }     

handleSubmit() {
  this.fetchData(this.state.name);
}


  render() {
          if(this.state.isLoading5 || this.state.isLoading){
          return <View><Text>Loading...</Text></View>
       }
          if (this.state.Satellite.totalItems == 0) {
             Alert.alert(
      "Error",
      "Satellite Not Found, returning...",
      [
        {
          text: "Ok",
          onPress: () => this.fetchData("SES-12")
        }
      ],
      { cancelable: false }
    );
      return <View><Text>Not Found,Retry</Text></View>
     }
     else {
    return (
      latLonObj = getLatLngObj(MakeTLE(this.state.Satellite.member[0])),
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
        <View style= {{paddingLeft:10, paddingRight:10}}>
          <TextInput
      style={styles.inputBox}
      onChangeText={this.handleNameChange}
      placeholder=" Input Satellite Name Here "
    />
    </View>
    <View style={styles.buttonMarker}>
        <TouchableOpacity style = {styles.setLocation} onPress={this.getLocation}>
            <MaterialIcons name="my-location" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.saveButton} onPress={this.handleSubmit}>
            <Text style = {{color : '#fff', fontWeight:'bold'}}>Mark Satellite</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.saveButton} onPress={this.updateLocation}>
            <Text style = {{color : '#fff', fontWeight:'bold'}}>Display Route</Text>
        </TouchableOpacity>
    </View>
     
      <MapView 
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      showsPointsOfInterest
      style={styles.map}
      onLayout={this.onMapLayout}
      zoomEnabled
      zoomControlEnabled
      showsUserLocation={true}
      followsUserLocation={true}
    >
    <Marker
      coordinate={{
        latitude: latLonObj.lat,
        longitude: latLonObj.lng,
         }}
      title= {this.state.Satellite.member[0].name}
    >
    </Marker>
       <Polyline
    coordinates={[
      { latitude: this.state.polya, longitude: this.state.polyb},
      { latitude: this.state.polyc, longitude: this.state.polyd },
    ]}
    strokeColors={[
      '#f5a623'
    ]}
    strokeWidth={3}
  />
    </MapView>
        </ScrollView>
      </SafeAreaView>
    )
  }
  }
  }


export default Maps;
