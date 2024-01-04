import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import { DashboardContext } from './context/dashboardContext';

export interface User{
    isSubscribed: boolean;
    name: string
}

const App = () => {

    const [user] = useState<User>({
        isSubscribed: true,
        name: 'Kushal'
    })

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  touchableButton: {
    backgroundColor: 'blue',
    height: 30,
    width: 40,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  }
})