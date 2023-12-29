import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
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
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={option => option.id}
        renderItem={({item}) => (
            <TouchableOpacity style={tw`bg-gray-200 p-2 pl-6 pb-8 pt-4 m-2 w-40`}>
                <View>
                    <Image 
                    style = {styles.image}
                    source={
                        {uri: item.image}
                    }
                    />
                    <Text
                    style={tw`mt-2 text-lg font-semibold`}
                    >{item.title}</Text>
                    <Icon type="antdesign" name="arrowright" color={'white'}/>
                </View> 
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 120,
        resizeMode: 'contain'
    }
})