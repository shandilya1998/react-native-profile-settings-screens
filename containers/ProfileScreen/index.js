import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./Profile";
//import SetLocationScreen from "./SetLocationScreen";
import PaymentDetailsScreen from "./PaymentDetailsScreen";
import TermsAndConditionsScreen from "./TermsAndConditionsScreen";
import NotificationsSettingsScreen from "./NotificationsSettingsScreen";
import SecurityScreen from "./SecurityScreen";
import EditProfileScreen from "./EditProfileScreen";

let Stack = createStackNavigator();

function ProfileScreen(){
    return(
        <NavigationContainer independent = {true}>
            <Stack.Navigator initalRouteName = 'profile' screenOptions={{
                        headerShown: false
                }}> 
                <Stack.Screen name = 'profile' component = {Profile}/>
                <Stack.Screen name = 'edit' component = {EditProfileScreen}/>
                <Stack.Screen name = 'pay' component = {PaymentDetailsScreen}/>
                <Stack.Screen name = 'terms' component = {TermsAndConditionsScreen}/>
                <Stack.Screen name = 'notifications' component = {NotificationsSettingsScreen}/>
                <Stack.Screen name = 'security' component = {SecurityScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );  
}

export default ProfileScreen;
