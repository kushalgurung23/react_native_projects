import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddToDo = () => {
    const [input, setInput] = useState('')
    // DISPATCH uses REDUCERS to changes values of STORES
    const dispatch = useDispatch()

    const addToHandler = () => {
        if(!input) return;
        dispatch(addTodo(input))
        setInput('')
    }
    
  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter new todo"
      />
      <TouchableOpacity style={styles.btn} onPress={addToHandler}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddToDo

const styles = StyleSheet.create({
  addTodoContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  btn: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    padding: 10
  }
})