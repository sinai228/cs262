/* Name: Sinai Park(sp46)
CS 262_Homework01
9 / 18 / 2020 */

import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {

  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View>
        <Text style={styles.item}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginTop: 16,
    borderColor: '#777',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  },

})
