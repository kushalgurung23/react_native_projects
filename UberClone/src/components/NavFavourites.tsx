import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Stamford Bridge, London, UK"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Kwai Chung, NT, Hong Kong"
    }
]

interface NewFavouriteProps {
    arg1: string,
    arg2: string
}

const NavFavourites: React.FC<NewFavouriteProps> = ({arg1, arg2}) => {
  return (
    <FlatList 
    data={data}
    keyExtractor={key => key.id}
    ItemSeparatorComponent={() =>(
        <View 
        style={[tw `bg-gray-200`, {height: 0.5}]}
        />
    )}
    renderItem={({item: {icon, location, destination}}) => (
        <TouchableOpacity
        style={tw `flex-row items-center p-5`}
        >
            <Icon 
            style= {tw `mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            />
            <View>
                <Text
                style={tw `font-semibold text-lg`}
                >{location}</Text>
                <Text style={tw `text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})