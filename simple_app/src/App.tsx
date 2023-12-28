import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './state/store'
import ToDo from './components/ToDo'
import AddToDo from './components/AddToDo'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AddToDo />
        <ToDo />
      </SafeAreaView>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})