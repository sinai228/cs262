/* Name: Sinai Park(sp46)
CS 262_Lab05
9 / 30 / 2020 */

import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {
  //keep track of whether the getFonts() is loaded or not
  const [fontsloaded, setFontsLoaded] = useState(false);

  //evaulate if fonts have loaded
  if (fontsloaded) {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  } else {
    return (
      //apploading component triggers asynchronous task
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
};
