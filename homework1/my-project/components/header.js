/* Name: Sinai Park(sp46)
CS 262_Homework01
9 / 18 / 2020 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 45,
    backgroundColor: 'lightblue',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  }
});