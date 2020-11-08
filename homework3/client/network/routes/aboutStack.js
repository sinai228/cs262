/* Name: Sinai Park(sp46)
CS 262_Homework2
10 / 7 / 2020 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#ddd' } }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          title: 'About Gamezone',
          headerTitle: () => (
            <Header navigation={navigation} title='About Gamezone' />
          ),
        })}
      />
    </Stack.Navigator>
  )
};
