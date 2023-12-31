import { GOOGLE_MAPS_APIKEY } from '@env'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { AppDispatch } from '../state/store'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MapStackParamList } from '../screens/MapScreen'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
const NavigateCard = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<MapStackParamList>>()
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Afternoon, Kushal</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={styles}
            minLength={2}
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
            query={{key: GOOGLE_MAPS_APIKEY, language: 'en'}}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                }),
              );
              navigation.push('RideOptionsCard');
            }}
          />
        </View>
        <NavFavourites arg1="testing" arg2="FC" />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto mb-3 border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.push('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})