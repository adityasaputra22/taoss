import {createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../pages/Login';
import SignupScreen from '../pages/Signup';

const AuthStack = createStackNavigator ({
    Login : {
    screen: LoginScreen,
    navigationOptions: {
        headerShown: false,
    }
},
});

export default AuthStack;