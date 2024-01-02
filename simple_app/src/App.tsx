import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'
import ApiTodo from './components/ApiTodo'
import { store } from './state/store'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AddToDo />
        <ToDo />
        <ApiTodo/>
      </SafeAreaView>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  }
})