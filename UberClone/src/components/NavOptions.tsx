import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
import { RootStackParamList } from '../App'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
]

const NavOptions = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const origin = useSelector(selectOrigin)

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={option => option.id}
      renderItem={({item}) => (
        <TouchableOpacity
        disabled={!origin}
          onPress={() => navigation.push('MapScreen')}
          style={tw`bg-gray-200 p-2 pl-6 pb-8 pt-4 m-2 w-40`}>
          <View style={tw `${!origin ? "opacity-20": ''}`}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color={'white'}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default NavOptions

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 120,
        resizeMode: 'contain'
    }
})