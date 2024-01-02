import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fetchTodos } from '../features/todo/apiTodoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'

const ApiTodo = () => {
    const dispatch: AppDispatch = useDispatch()
    const apiTodos = useSelector((state:RootState) => state.apiTodo.data)
    const fetchApi = () => {
      dispatch(fetchTodos());
    }

  return (
    <View style={styles.mainContainer}>
      <Text>Fetch API TODO:</Text>
      {apiTodos !== null ? null : <TouchableOpacity style={styles.btn} onPress={fetchApi}>
        <Text style={styles.btnTxt}>Fetch</Text>
      </TouchableOpacity> }
      
      <FlatList 
        data={apiTodos}
        keyExtractor={todo => todo.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.id+" "+item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default ApiTodo

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  btn: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    padding: 10
  },
  btnTxt:{
    color: 'white'
  }
})