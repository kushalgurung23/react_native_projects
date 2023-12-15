import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// NAVIGATION
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to details'
    //   onPress={() => navigation.navigate('Detail', {productId: 'Chelsea'})}
    // onPress={() => navigation.navigate('Detail')}
    onPress={() => navigation.push('Detail', {productId: 'chelsea'})}
      ></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        color: 'black'
    }
})