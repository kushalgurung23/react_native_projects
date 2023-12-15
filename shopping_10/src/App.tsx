import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import Home from './screens/Home'
import Detail from './screens/Detail'

export type RootStackParamList = {
  Home: undefined,
  Detail: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
      name='Home'
      component={Home}
      options={{
        title: 'Home Screen'
      }}
      />
      <Stack.Screen 
      name='Detail'
      component={Detail}
      options={{
        title: 'Detail Screen'
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})