import React from 'react'

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import Detail from './src/Detail'
import Home from './src/Home'

export type RootStackParamList = {
  Home: undefined;
  Detail: {productId: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' 
        component={Home}
        options={{
          title: "Trending Products",
        }}
        />
        <Stack.Screen name='Detail' 
        component={Detail}
        options={{
          title: "Product Details",
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
