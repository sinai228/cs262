/* Name: Sinai Park(sp46)
CS 262_Homework2
10 / 7 / 2020 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen
        name="About"
        component={AboutStack}
        options={{ drawerLabel: 'About' }} />
    </Drawer.Navigator >
  );
}
