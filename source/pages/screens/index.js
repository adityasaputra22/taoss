import React from 'react';
import Screen from './Screen';
import DashboardScreen from '../Dashboard';

export const Dashboard = ({navigation}) => <Screen navigation = {navigation}  name="Dashboard" />;

export const MyProfile = ({navigation}) => <Screen navigation = {navigation} name="My Profile"/>;
// export const EditProfile = ({navigation}) => <Screen navigation = {navigation} name="Edit Profile"/>;
// export const ChangePassword = ({navigation}) => <Screen navigation = {navigation} name="Change Password"/>;