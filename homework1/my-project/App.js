/* Name: Sinai Park(sp46)
CS 262_Homework01
9 / 18 / 2020 */

import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem.js';
import AddTodo from './components/addTodo.js';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Lab 3', key: '1' },
    { text: 'Homework 1', key: '2' },
    { text: 'Project 1', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    marginTop: 20
  },
  content: {
    marginTop: 10,
    textAlign: 'center',
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 10,
    flex: 1,
  }
});