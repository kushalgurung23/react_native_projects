import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions';
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text style={tw`text-red-500 p-10`}>I am the home screen</Text> */}
      <View style={tw`p-5`}>
        <Image 
        style={
          styles.imgSrc
        }
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
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