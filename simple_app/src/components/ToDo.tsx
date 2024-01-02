import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { RootState } from '../state/store'

const ToDo = () => {
    const todos = useSelector((state: RootState) => state.todo.todos)
    const dispatch = useDispatch()
  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTxt}>Todo:</Text>
      {todos.length===0 ? <Text>No todo list</Text> :
      <FlatList
      data={todos}
      keyExtractor={todo => todo.id.toString()}
      renderItem={({item}) => (
        <View style={styles.todoContainer}>
          <Text style={styles.todoText}>{item.text}</Text>
          <Button
            title="Remove"
            onPress={() => dispatch(removeTodo(item.id))}
            color={'red'}
          />
        </View>
      )}
    />
      }
      
    </View>
  );
}

export default ToDo

const styles = StyleSheet.create({
  titleTxt: {
    marginVertical: 10
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 15,
  },
  todoContainer: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    marginRight: 30,
    flex: 1,
  },
  btnText: {
    fontSize: 20,
    color: 'red',
    marginRight: 30
  }
})