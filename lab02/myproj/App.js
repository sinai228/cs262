/* Name: Sinai Park(sp46)
CS 262_Lab02
9 / 11 / 2020 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, } from 'react-native';

export default function App() {
  // Declare a new state variable, "name"
  const [name, setName] = useState('John Doe');
  // Declare a new state variable, "birthday"
  const [birthday, setBirthday] = useState([]);
  // Declare a new state variable, "newAge"
  const [newAge, setAge] = useState(1);


  const handleClick = () => {
    //Updates the age
    setAge(prevAge => prevAge + 1);
    //Updates the birthday with the incremented age
    setBirthday(birthday.concat({ key: newAge.toString() }));
  }


  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        keyboardType='ascii-capable'
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(value) => setName(value)} />

      <Text> {name} is {newAge - 1} years old. </Text>

      <View style={styles.buttonContainer}>
        <Button title='Update Birthday' onPress={handleClick} color='#cd853f' />
      </View>

      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.key + 1}
        data={birthday}
        renderItem={({ item, key }) => (
          <TouchableOpacity>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff0',
    paddingTop: 40,
    //paddingHorizontal: 20
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 20,
    width: 200
  },
  item: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffdab9',
    fontSize: 10,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10

  }
});

