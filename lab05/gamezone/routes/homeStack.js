/* Name: Sinai Park(sp46)
CS 262_Lab05
9 / 30 / 2020 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#ddd' } }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <Header navigation={navigation} title='Gamezone' />
                    ),
                })}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: 'Review' }}
            />
        </Stack.Navigator>
    )
};
