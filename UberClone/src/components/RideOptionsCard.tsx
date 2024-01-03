import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { MapStackParamList } from '../screens/MapScreen'
import { selectTravelTimeInformation } from '../slices/navSlice'

interface RideOption {
    id: string,
    title: string,
    multiplier: number,
    image: string
}

const data : RideOption[] = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
]

// If we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MapStackParamList>>();
  const [selected, setSelected] = useState<RideOption | null>(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <View style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={[tw`absolute top-3 left-5 p-3 rounded-full`, {zIndex: 1}]}
          onPress={() => {
            navigation.pop();
          }}>
          <Icon name="chevron-left" type="fontawesome" 
          size={30}
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride {travelTimeInformation?.distance.text ? "- "+travelTimeInformation?.distance.text : ''}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={key => key.id}
        renderItem={({item: {id, title, multiplier, image}, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10
            ${id === selected?.id ? 'bg-gray-200' : ''}
            `}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{uri: image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('en-gb', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(
                    (travelTimeInformation?.duration.value ?? 0 * SURGE_CHARGE_RATE * multiplier) / 100
                )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw `mt-auto border-t border-gray-200`}>
      <TouchableOpacity
        disabled={!selected}
        style={[
          tw`bg-black m-3 mb-5 py-3 rounded-3
            ${!selected ? 'bg-gray-300' : ''}
            `
        ]}>
        <Text
          style={[
            tw`text-white text-xl`,
            {
              textAlign: 'center',
            },
          ]}>
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default RideOptionsCard

const styles = StyleSheet.create({})