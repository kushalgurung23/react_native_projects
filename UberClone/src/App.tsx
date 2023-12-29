import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { store } from './state/store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({});