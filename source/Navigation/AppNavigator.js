import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import AuthNavigator from '../Navigation/AuthNavigator';
import DashboardNavigator from '../Navigation/DashboardNavigator';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Loading from '../pages/Loading';


export default createAppContainer(createSwitchNavigator(
    {
        Auth : AuthNavigator,
        AppMenu : DashboardNavigator,
        SignupMenu : Signup,
        LoginMenu : Login,
        DashboardMenu : Dashboard,
        Loading: Loading,
    },
    {
        // sebelum masuk ke screen, akan ada pengecekkan di halaman loading
        // apakah ada data user di asyncstorage?
        // jika ada maka langsung dilempar ke screen AppMenu, jika tidak ada ke screen login
        initialRouteName : 'Loading'
    }
));
