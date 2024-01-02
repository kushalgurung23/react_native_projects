import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY, CHELSEA} from "@env"
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { setDestination, setOrigin } from '../slices/navSlice';
const HomeScreen = () => {
  const dispatch : AppDispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text style={tw`text-red-500 p-10`}>I am the home screen</Text> */}
      <View style={tw`p-5`}>
        <Image
          style={styles.imgSrc}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
          placeholder="Where from?"
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              color: 'black'
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
          }}
          onPress={(data, details = null) => {
            // console.log(data);
            // console.log(details);
            dispatch(setOrigin({location: details?.geometry.location,
            description: data.description
            }))

            dispatch(setDestination(null))
          }}
          fetchDetails= {true}
          enablePoweredByContainer={false}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'blue'
  },
  imgSrc: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  }
})