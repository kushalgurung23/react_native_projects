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
    <View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter"
      />
      <TouchableOpacity onPress={addToHandler}>
        <Text> Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddToDo

const styles = StyleSheet.create({})