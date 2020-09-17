/* Name: Sinai Park(sp46)
CS 262_Lab04
9 / 18 / 2020 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#ddd' } }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'GameZone' }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: 'Review' }}
            />
        </Stack.Navigator>
    )
};
