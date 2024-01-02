import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import Map from '../components/Map'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

export type MapStackParamList = {
  NavigateCard: undefined,
  RideOptionsCard: undefined
}

const MapScreen = () => {
  const Stack = createNativeStackNavigator<MapStackParamList>()
 
  return (
    <SafeAreaView>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
          name='NavigateCard'
          component={NavigateCard}
          options={{headerShown: false}}
           />
          <Stack.Screen
          name='RideOptionsCard'
          component={RideOptionsCard}
          options={{headerShown: false}}
           />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
}

export default MapScreen

const styles = StyleSheet.create({})