import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
import { RootStackParamList } from '../App'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

export type MapStackParamList = {
  NavigateCard: undefined,
  RideOptionsCard: undefined
}

const MapScreen = () => {
  const Stack = createNativeStackNavigator<MapStackParamList>()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => {
          navigation.pop();
        }}>
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {paddingTop: 0, marginTop: 0},
          }}>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

export default MapScreen

const styles = StyleSheet.create({})